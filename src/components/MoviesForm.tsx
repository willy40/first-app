import {Component} from 'react'
import { connect } from 'react-redux'
import {resetMovies, resetErrorState} from '../stores/actions/movieActions'
import { IMovie } from '../stores/reducers/types'
import { Dispatch, bindActionCreators } from 'redux'
import React from 'react';
import { addMovieApi } from 'src/apis/movieApi'
import { Spinner } from './Spiner'

interface IMoviesFormProps { 
    add: (movie: IMovie) => {},
    reset: () => {},
    resetErrorState: () => {}
    error: boolean,
    pending: boolean
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

    componentDidMount(){
        this.props.resetErrorState();
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
            this.handleAdd(e);
        }
    }

    resetList = () =>{
        this.props.reset();
    }

    handleAgain = () => {
        this.props.resetErrorState();
    }

    Error = () =>{
        return (<button 
                    type='button'
                    onClick={this.handleAgain}>
                    Error while adding movie, try again
                </button>
        )
    }
    Form = () =>{
        return (<form onSubmit={this.handleAdd}>
            Enter Movie name: <input type="Text" 
                value={this.state.value}
                onChange={this.changeValue}
                onKeyPress={this.handleEnter}/>
            
            <button type='submit'>Add movie
            </button>
        
            <button type='button'
                onClick={this.resetList}>Clear
            </button>
        </form>)
    }

    render() {
        if(this.props.error) {
            return this.Error();
        }
        else {
            if(this.props.pending){
                return Spinner();
            }
            else
            {
                return this.Form();
            }
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
        add: (item: IMovie) => addMovieApi(item),
        reset: () => resetMovies(),
        resetErrorState: () => resetErrorState()
    }, dispatch)

const mapStateToProps = (state: any) => ({
    error: state.movies.error,
    pending: state.movies.pending
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesForm)