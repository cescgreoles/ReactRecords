import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import artistsReducer from "./artists/artists.reducer";
import albumsReducer from "./albums/albums.reducer";
import genresReducer from "./genres/genres.reducer";
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  genres: genresReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
