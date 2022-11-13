// import axios from "axios";
import "../styles/Artists.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtists } from "../redux/artists/artists.functions";
import ButtonBack from "../components/ButtonBack";

const Artists = () => {
  const dispatch = useDispatch();
  const { artists, isLoading, error } = useSelector((state) => state.artists);

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  return (
    <div>
      <ButtonBack />
      <div className="general-artists">
        {isLoading ? (
          <img
            src="https://images-ext-1.discordapp.net/external/EoEakJ8i82DzYfH1BTQEdkTlxEpNWLJDW_LSwRSRjJg/%3Fcid%3D73b8f7b101eeca27b0607d5599e384199d079a6c2e2a3a98%26rid%3Dgiphy.mp4%26ct%3Dg/https/media1.giphy.com/media/IqvAnC0wnlwbwqLpdc/giphy.mp4"
            alt="loading"
          />
        ) : !error ? (
          artists.map((artist) => {
            return (
              <div className="container-artists" key={artist.id}>
                <h3>{artist.name}</h3>
                <div className="img-div">
                  <img
                    src={artist.img}
                    alt={artist.name}
                    className="img-artists"
                  />
                </div>
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

export default Artists;
