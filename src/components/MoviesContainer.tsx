import React, {Component} from 'react'
import { connect } from 'react-redux'
import { IMovies } from '../stores/reducers/types'

interface IMoviesContainerProps{
    filmikiProps: IMovies
}

class MoviesContainer extends Component<IMoviesContainerProps>{
    render(){
        return(
        <ul>
            {this.props.filmikiProps.list.map((movie:string, i:number) => <li key={i}>{movie}</li>)}
        </ul>
        )
    }
}

const mapStateToProps = (state:any) =>({
    filmikiProps: state.movies
})

export default connect(mapStateToProps)(MoviesContainer)