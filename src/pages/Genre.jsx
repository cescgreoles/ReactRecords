import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../redux/genres/genres.functions";

const Genres = () => {
  const dispatch = useDispatch();
  const { genres, isLoading, error } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <img src="" alt="loading" />
      ) : !error ? (
        genres.map((genre) => {
          return (
            <div className="genre" key={genre.id}>
              <h3>{genre.name}</h3>
            </div>
          );
        })
      ) : (
        <div>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default Genres;
