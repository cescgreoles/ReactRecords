// import axios from "axios";
import "../styles/Albums.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../redux/albums/albums.functions";

const Albums = () => {
  const dispatch = useDispatch();
  const { albums, isLoading, error } = useSelector((state) => state.albums);

  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  return (
    <div className="general-albums">
      {isLoading ? (
        <img
          src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
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

export default Albums;
