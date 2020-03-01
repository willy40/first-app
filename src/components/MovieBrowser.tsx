import {Container, Row } from 'react-bootstrap';
import {AppBar} from 'material-ui';
import { Dispatch, bindActionCreators } from 'redux'
import { fetchMoviesApi as fetchMoviesAction }  from 'src/apis/movieApi';
import { IMovies } from 'src/stores/reducers/types';
import React from 'react';
import { connect } from 'react-redux'
import MovieListComponent from './movieList.component';
import { getMoviesList } from 'src/Helpers/movie-browser.helpers';
import { getScrollDownPercentage } from 'src/Helpers/scroll.helper';

interface IMovieBrowserProps {
    fetchProducts: (page: number) => {},
    movies: IMovies,
    isLoding: boolean
}

interface IMovieBrowserState {
    currentPage: number
}

class MovieBrowser extends React.Component<IMovieBrowserProps, IMovieBrowserState> {
    constructor(props: IMovieBrowserProps){
        super(props);

        this.state = {
            currentPage: 1
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        const scroll = getScrollDownPercentage(window);

        if(scroll > 0.8){
            const nextPage = this.state.currentPage + 1;
            this.props.fetchProducts(nextPage);
            this.setState({currentPage: nextPage});
        }
    }

    componentDidMount(){
        window.onscroll = this.handleScroll;
        this.props.fetchProducts(this.state.currentPage);
    }

    omponentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }    

  render() {
    const movies = getMoviesList(this.props.movies);
    
    return (
      <div>
        <AppBar title='Movie Browser'/>
        <Container>
          <Row>
          <MovieListComponent movies={movies} isLoading={this.props.isLoding}/>
          </Row>
          <Row>
            <p>Movie list will go here</p>
          </Row>
        </Container >
      </div>
    );
  }
}


const mapStateToProps = (state: any ) =>({
    movies: state.movies.Movies,
    isLoding: state.movies.pending
})

const mapDispatchToProps = (dispatch : Dispatch) => bindActionCreators({
    fetchProducts: fetchMoviesAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieBrowser)