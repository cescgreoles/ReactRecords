import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonBack from "../components/ButtonBack";
import { getGenres } from "../redux/genres/genres.functions";
import "../styles/Genero.scss";
import { generatePath, Link } from "react-router-dom";
import Footer from "../components/Footer";

const Genres = () => {
  const dispatch = useDispatch();
  const { genres, isLoading, error } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className="container-top-genre">
      <ButtonBack />
      <div className="container-genre">
        {isLoading ? (
          <img
            src="https://images-ext-1.discordapp.net/external/EoEakJ8i82DzYfH1BTQEdkTlxEpNWLJDW_LSwRSRjJg/%3Fcid%3D73b8f7b101eeca27b0607d5599e384199d079a6c2e2a3a98%26rid%3Dgiphy.mp4%26ct%3Dg/https/media1.giphy.com/media/IqvAnC0wnlwbwqLpdc/giphy.mp4"
            alt="loading"
          />
        ) : !error ? (
          genres.map((genre) => {
            return (
              <div key={genre._id} className="div-genre">
                <div>
                  <h2>{genre.name}</h2>
                  <img
                    src={genre.img}
                    alt={genre.img}
                    className="img-genre"
                  ></img>
                </div>
                <Link
                  to={generatePath("/genre/:name", {
                    name: genre.name,
                  })}
                >
                  Ver mas
                </Link>
              </div>
            );
          })
        ) : (
          <div>
            <h2>{error}</h2>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Genres;
