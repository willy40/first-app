import React, {Component} from 'react'
import { connect } from 'react-redux'
import { IMovies, IMovie } from '../stores/reducers/types'
import { fetchMovies } from '../apis/movieApi';

interface IMoviesProps{
    filmikiProps: IMovies
}

class Movies extends Component<IMoviesProps>{
    componentDidMount() {
        fetchMovies();
    }
    
    RenderList = (list : IMovie[]) => {
        return(
                <div>
                    <span>Movies List</span>
                    <ul>
                        { list.map((movie:IMovie) => <li key={movie.id}>{movie.name}</li>) }
                    </ul>
                </div>
            );
        }
        
    EmptyList(){
        return(
                <span>Go to form and add some movies</span>
        );
    };

    Spinner(){
        return (
            <div className="loader"></div>
        )
    }

    Error(){
        return(
            <span>Buuuuu.....</span>
        )
    }

    render = () => {
        if( this.props.filmikiProps.pending ){
            return this.Spinner()
        }
     
        if( this.props.filmikiProps.error){
            this.Error();
        }
        
        if( this.props.filmikiProps.list.length !== 0 )
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

export default connect(mapStateToProps)(Movies)