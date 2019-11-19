import React, {Component} from 'react'
import { connect } from 'react-redux'
import moviesActions from '../stores/actions/movieActions'
import { IMovie } from '../stores/reducers/types'

interface IMoviesFormProps { 
    add: (movie: IMovie) => {},
    reset: () => {}
}

interface IMoviesFormState {
    value: string
}

class MoviesForm extends Component<IMoviesFormProps, IMoviesFormState>{
    constructor(props: IMoviesFormProps){
        super(props)

        this.state = {
            value: ''
        }
    }

    changeValue = (e: any) => {
        this.setState({value: e.target.value});
    }

    handleAdd = (e: any) => {
        e.preventDefault();
        if(this.state.value.length <= 0){
            return;
        }

        this.props.add(
            {
                id: 100,
                name: this.state.value
            });

        this.setState({value:''})
    }

    handleEnter = (e: any) => {
        if(e.key === 'Enter'){
            this.handleAdd(e)
        }
    }

    resetList = () =>{
        this.props.reset()
    }

    render(){
        return (
            <form onSubmit={this.handleAdd}>
                Enter Movie name: <input type="Text" 
                    value={this.state.value}
                    onChange={this.changeValue}
                    onKeyPress={this.handleEnter}/>

                <button type='submit'>Add movie
                </button>

                <button type='button'
                    onClick={this.resetList}>Clear
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = () =>({
    add: (movie: IMovie) => moviesActions.add(movie),
    reset: () => moviesActions.reset()
})

export default connect(null, mapDispatchToProps)(MoviesForm)