import axios from "axios";

export const getArtists = () => async (dispatch) => {
  dispatch({ type: "gettingArtists" });

  try {
    const result = await axios.get("http://localhost:3000/artists");
    dispatch({ type: "getArtists", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorArtists", payload: error.message });
  }
};

export const postArtists = () => async (dispatch) => {};

export const putArtists = () => async (dispatch) => {};
