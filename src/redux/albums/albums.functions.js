import { API } from "../../shared/services/api";

export const getAlbums = () => async (dispatch) => {
  dispatch({ type: "gettingAlbums" });

  try {
    const result = await API.get("http://localhost:3000/albums");
    console.log(result);
    dispatch({ type: "getAlbums", payload: result.data });
  } catch (error) {
    dispatch({ type: "errorAlbums", payload: error.message });
  }
};

export const postAlbums = (datos, navigate) => async (dispatch) => {
  dispatch({ type: "postingAlbums" });
  try {
    const result = await API.post("albums/create", datos);
    console.log(result);
    dispatch({ type: "postAlbums", payload: result.data });
    navigate("/albums");
  } catch (error) {
    dispatch({ type: "errorPostAlbums", payload: error.message });
  }
};

export const putAlbums = () => async (dispatch) => {};
