import { BaseApi } from "./api"

export function login(user) {
  return {
    type: "LOG_IN",
    user
  }
}

export function logout() {
  return {
    type: "LOG_OUT"
  }
}

export function receiveCatalogue(payload) {
  return {
    type: "RECEIVE_CATALOGUE",
    catalogue: payload
  }
}

export function fetchCatalogue(keyword, genre) {
  return dispatch => {
    return BaseApi.get("/movies", {
      params: {
        catalogue: true,
        keyword: keyword || undefined,
        genre: genre || undefined
      }
    })
    .then(response => {
      dispatch(receiveCatalogue(response.data.movies));
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export function fetchSelectedMovieDetail(movie_name) {
  return dispatch => {
    return BaseApi.get("/movie/" + movie_name)
    .then(response => {
      dispatch(receiveSelectedMovieDetail(response.data));
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export function receiveSelectedMovieDetail(payload) {
  return {
    type: "RECEIVE_SELECTED_MOVIE",
    selectedMovie: payload
  }
}