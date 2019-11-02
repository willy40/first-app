import React, {Component} from 'react'
import { connect } from 'react-redux'

class MoviesContainer extends Component{
    render(){
        return(
        <ul>
            {this.props.filmikiProps.list.map((movie, i) => <li key={i}>{movie}</li>)}
        </ul>
        )
    }
}

const mapStateToProps = state =>({
    filmikiProps: state.movies
})

export default connect(mapStateToProps)(MoviesContainer)