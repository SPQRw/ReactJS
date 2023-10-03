export function addMovieToStore(movieData) {
  return {
    type: "ADD_MOVIE",
    movieData,
  };
}

export function getMovie(title) {
  return (dispatch) => {
    fetch("http://www.omdbapi.com/?apikey=a06e8fb3&t=" + title)
      .then((response) => response.json())
      .then((json) => dispatch(addMovieToStore(json)));
  };
}
