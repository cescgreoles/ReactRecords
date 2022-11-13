const INITIAL_STATE = {
  albums: [],
  isLoading: false,
  error: false,
};

const albumsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "gettingAlbums":
      return { ...state, isLoading: true, error: false };
    case "getAlbums":
      return {
        ...state,
        isLoading: false,
        albums: action.payload,
        error: false,
      };
    case "errorAlbums":
      return {
        ...state,
        isLoading: false,
        albums: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default albumsReducer;
