const INITIAL_STATE = {
  artists: [],
  isLoading: false,
  error: false,
};

const artistsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingArtists":
      return { ...state, isLoading: true, error: false };
    case "getArtists":
      return {
        ...state,
        isLoading: false,
        artists: action.payload,
        error: false,
      };
    case "errorArtists":
      return {
        ...state,
        isLoading: false,
        artists: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default artistsReducer;
