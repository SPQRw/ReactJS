import React from "react";

const movieReducers = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      console.log(action.movieData);
      return 0;
    default:
      return state;
  }
};

export default movieReducers;
