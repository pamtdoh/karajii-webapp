import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import MovieDetail from '../components/home/MovieDetail';
import { fetchSelectedMovieDetail } from '../actions';

const MovieDetailPage = ({ match, fetchDetail, selectedMovie }) => {
    useEffect(() => {fetchDetail(match.params.movie_name)}, []);

    if (selectedMovie != null) {
        return (
            <MovieDetail 
                title={selectedMovie.title}
                coverImage={selectedMovie.cover_image}
                year={selectedMovie.year}
                genre={selectedMovie.genres}
                duration={selectedMovie.duration} 
                stock={selectedMovie.stock}
                price={selectedMovie.price}
                summary={selectedMovie.summary}
            />
        )
    } else {
        return null;
    }
}

const mapStateToProps = state => ({
    selectedMovie: state.selectedMovie
})

const mapDispatchToProps = dispatch => ({
    fetchDetail: movie_name => dispatch(fetchSelectedMovieDetail(movie_name))
})

export default connect (mapStateToProps, mapDispatchToProps) (MovieDetailPage);