const INITIAL_STATE = {
  albums: [],
  isLoading: false,
  error: false,
};

const albumsReducer = (state = INITIAL_STATE, action) => {
  const myAlbums = state.albums;

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

    case "postingAlbums":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "postAlbums":
      return {
        ...state,
        isLoading: false,
        error: false,
        albums: [...myAlbums, action.payload],
      };
    case "errorPostAlbums":
      return {
        ...state,
        isLoading: false,
        albums: [...myAlbums],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default albumsReducer;
