import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import moviesActions from '../stores/actions/movieActions'

class MoviesForm extends PureComponent{
    constructor(props){
        super(props);
    
        this.state = {
            value:''
        }
    }

    changeValue = (e) => {
        this.setState({value: e.target.value});
    }

    handleAdd = (e) => {
        e.preventDefault();
        if(this.state.value.length <= 0){
            return;
        }

        this.props.add(this.state.value);
        this.setState({value:''})
    }

    handleEnter = (e) => {
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
                <input type="Text" 
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
    add: (movie) => moviesActions.add(movie),
    reset: () => moviesActions.reset()
})

export default connect(null, mapDispatchToProps)(MoviesForm)