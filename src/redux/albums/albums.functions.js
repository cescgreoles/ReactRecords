import axios from "axios";

export const getAlbums = () => async (dispatch) => {
  dispatch({ type: "gettingAlbums" });

  try {
    const result = await axios.get("http://localhost:3000/albums");
    console.log(result);
    dispatch({ type: "getAlbums", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorAlbums", payload: error.message });
  }
};

export const postAlbums = () => async (dispatch) => {};

export const putAlbums = () => async (dispatch) => {};
