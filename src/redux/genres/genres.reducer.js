const INITIAL_STATE = {
  genres: [],
  isLoading: false,
  error: false,
};

const genresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingGenres":
      return { ...state, isLoading: true, error: false };
    case "getGenres":
      return {
        ...state,
        isLoading: false,
        genres: action.payload,
        error: false,
      };
    case "errorGenres":
      return {
        ...state,
        isLoading: false,
        genres: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default genresReducer;
