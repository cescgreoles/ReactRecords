import axios from "axios";

export const getGenres = () => async (dispatch) => {
  dispatch({ type: "gettingGenres" });

  try {
    const result = await axios.get("http://localhost:3000/genres");
    dispatch({ type: "getGenres", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorGenres", payload: error.message });
  }
};

export const postGenres = () => async (dispatch) => {};

export const putGenres = () => async (dispatch) => {};
