const setMovies = (state, data) => {
  return {
    ...state,
    movies: data,
  };
};

const setCinemas = (state, data) => {
  return {
    ...state,
    cinemas: data,
  };
};

const setSelectedCinema = (state, data) => {
  return {
    ...state,
    selectedCinema: data,
  };
};

const setTicket = (state, data) => {
  console.log(data);
  return {
    ...state,
    ticket: {
      ...state.ticket,
      ...data,
    },
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setMovies":
      return setMovies(state, action.data);

    case "setCinemas":
      return setCinemas(state, action.data);

    case "setSelectedCinema":
      return setSelectedCinema(state, action.data);

    case "setTicket":
      console.log(action);
      return setTicket(state, action.data);

    default:
      return state;
  }
};

export default reducer;
