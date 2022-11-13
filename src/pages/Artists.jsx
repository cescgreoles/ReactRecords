// import axios from "axios";
import "../styles/Artists.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArtists } from "../redux/artists/artists.functions";

const Artists = () => {
  const dispatch = useDispatch();
  const { artists, isLoading, error } = useSelector((state) => state.artists);

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  return (
    <div className="general-artists">
      {isLoading ? (
        <img src="" alt="loading" />
      ) : !error ? (
        artists.map((artist) => {
          return (
            <div className="container-artists" key={artist.id}>
              <h3>{artist.name}</h3>
              <img src={artist.img} alt={artist.name} className="img-artists" />
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

export default Artists;
