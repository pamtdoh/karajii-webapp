import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'

const Catalogue = ({ catalogueData }) => {
  const history = useHistory();
  console.log(catalogueData)
  return (
    <Row>
      {catalogueData.map(movieData => <MovieCard
        title={movieData.title}
        cover_image={movieData.cover_image}
        openMovieDetail= {() => {
          history.push("/movie/" + movieData.movie_name);
        }} />
      )}
    </Row>
  )
}

const mapStateToProps = state => ({
  catalogueData: state.catalogue
})

export default connect(mapStateToProps)(Catalogue);