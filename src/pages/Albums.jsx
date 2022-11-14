// import axios from "axios";
import "../styles/Albums.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../redux/albums/albums.functions";
import ButtonBack from "../components/ButtonBack";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Albums = () => {
  const dispatch = useDispatch();
  const { albums, isLoading, error } = useSelector((state) => state.albums);

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  const [query, setQuery] = useState("");

  return (
    <div>
      <div className="top-bar">
        <ButtonBack />
        <button className="button-top">
          <Link to="/albums/create">Create Album</Link>
        </button>

        <button className="button-top">
          <Link to="/albums/edit">Edit Album</Link>
        </button>
        <div className="search-albums">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
      </div>
      <section>
        <Navbar />
      </section>
      <div className="general-albums">
        {isLoading ? (
          <img
            src="https://images-ext-1.discordapp.net/external/EoEakJ8i82DzYfH1BTQEdkTlxEpNWLJDW_LSwRSRjJg/%3Fcid%3D73b8f7b101eeca27b0607d5599e384199d079a6c2e2a3a98%26rid%3Dgiphy.mp4%26ct%3Dg/https/media1.giphy.com/media/IqvAnC0wnlwbwqLpdc/giphy.mp4"
            alt="loading"
          />
        ) : !error ? (
          albums
            .filter((album) =>
              (
                album.name +
                album.groupName +
                album.discographic +
                album.year +
                album.genre
              )
                .toLowerCase()
                .includes(query)
            )
            .map((album) => {
              return (
                <div className="container-album" key={album.id}>
                  <img
                    src={album.img}
                    alt={album.name}
                    className="img-albums"
                  />
                  <h3>{album.name}</h3>
                  <p>{album.groupName}</p>
                  <p>{album.discographic}</p>
                  <p>{album.year}</p>
                  <p>{album.genre}</p>
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

export default Albums;
