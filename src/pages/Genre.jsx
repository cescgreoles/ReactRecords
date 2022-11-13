import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonBack from "../components/ButtonBack";
import { getGenres } from "../redux/genres/genres.functions";
import Navbar from "../components/Navbar";

const Genres = () => {
  const dispatch = useDispatch();
  const { genres, isLoading, error } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <ButtonBack />
      <div>
        {isLoading ? (
          <img
            src="https://images-ext-1.discordapp.net/external/EoEakJ8i82DzYfH1BTQEdkTlxEpNWLJDW_LSwRSRjJg/%3Fcid%3D73b8f7b101eeca27b0607d5599e384199d079a6c2e2a3a98%26rid%3Dgiphy.mp4%26ct%3Dg/https/media1.giphy.com/media/IqvAnC0wnlwbwqLpdc/giphy.mp4"
            alt="loading"
          />
        ) : !error ? (
          genres.map((genre) => {
            return (
              <div className="genre" key={genre._id}>
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
    </div>
  );
};

export default Genres;
