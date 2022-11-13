// import axios from "axios";
import "../styles/Albums.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../redux/albums/albums.functions";
import { Link } from "react-router-dom";
import ButtonBack from "../components/ButtonBack";

const Albums = () => {
  const dispatch = useDispatch();
  const { albums, isLoading, error } = useSelector((state) => state.albums);

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  return (
    <div>
      <div>
        <ButtonBack />
      </div>
      <div className="general-albums">
        {isLoading ? (
          <img
            src="https://images-ext-1.discordapp.net/external/EoEakJ8i82DzYfH1BTQEdkTlxEpNWLJDW_LSwRSRjJg/%3Fcid%3D73b8f7b101eeca27b0607d5599e384199d079a6c2e2a3a98%26rid%3Dgiphy.mp4%26ct%3Dg/https/media1.giphy.com/media/IqvAnC0wnlwbwqLpdc/giphy.mp4"
            alt="loading"
          />
        ) : !error ? (
          albums.map((album) => {
            return (
              <div className="container-album" key={album.id}>
                <img src={album.img} alt={album.name} className="img-albums" />
                <h3>{album.name}</h3>
                <p>{album.groupName}</p>
                <p>{album.discographic}</p>
                <p>{album.year}</p>
                <p>{album.genre}</p>
                <Link to={`/movies/${album.name}`}>Ver mas</Link>
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

export default Albums;
