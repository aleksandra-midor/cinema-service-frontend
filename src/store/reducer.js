const setMovies = (state, data) => {
  return {
    ...state,
    movies: data,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setMovies":
      return setMovies(state, action.data);

    default:
      return state;
  }
};

export default reducer;
