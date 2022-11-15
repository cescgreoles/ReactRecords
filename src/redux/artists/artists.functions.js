import axios from "axios";
import { API } from "../../shared/services/api";

export const getArtists = () => async (dispatch) => {
  dispatch({ type: "gettingArtists" });

  try {
    const result = await API.get("artists");
    dispatch({ type: "getArtists", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorArtists", payload: error.message });
  }
};

export const postArtists = () => async (dispatch) => {};

export const putArtists = () => async (dispatch) => {};
