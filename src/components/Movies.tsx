import {Component} from 'react'
import { connect } from 'react-redux'
import { IMovies, IMovie } from '../stores/reducers/types'
import React from 'react';
import { Dispatch, bindActionCreators } from 'redux'
import { fetchMoviesApi as fetchMoviesAction }  from 'src/apis/movieApi';
import { MovieItem } from './MoviesList';
import { Spinner } from './Spiner';

interface IMoviesProps {
    fetchProducts: () => {},
    filmikiProps: IMovies
}

class Movies extends Component<IMoviesProps>{
    componentDidMount() {
        const { fetchProducts } = this.props;
        fetchProducts();
    }
    
    RenderList = (list : IMovie[]) => {
        return(
                <div>
                    <span>Movies List</span>
                    <ul>
                        { list.map((movie:IMovie) => MovieItem(movie.id, movie.name)) }
                    </ul>
                </div>
            );
        }
        
    EmptyList(){
        return(
                <span>Go to form and add some movies</span>
        );
    };

    Error(){
        return(
            <span>Buuuuu.....</span>
        )
    }

    render = () => {
        const {pending, error, list} = this.props.filmikiProps;

        if( pending ){
            return Spinner();
        }
     
        if( error ){
            return this.Error();
        }
        
        if( list.length !== 0 )
        {
            return this.RenderList(this.props.filmikiProps.list)
        }
        else{
            return this.EmptyList() 
        }
    }
}

const mapStateToProps = (state:any) =>({
    filmikiProps: state.movies
})

const mapDispatchToProps = (dispatch : Dispatch) => bindActionCreators({
    fetchProducts: fetchMoviesAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Movies)