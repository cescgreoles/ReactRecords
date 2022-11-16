import axios from "axios";
import "../styles/GenreDetail.scss";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../shared/services/api";

const GenreDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [genre, setGenre] = useState({});
  useEffect(() => {
    const getGenre = async () => {
      const res = await API.get(
        `http://localhost:3000/genres/getbyname/${name}`
      );
      console.log(res.data);
      setGenre(res.data);
    };

    getGenre();
  }, []);
  return (
    <div className="div-genreDetail">
      <button onClick={() => navigate("/genre")} className="button-back-g">
        Back To Genres
      </button>
      <img src={genre.img} alt={genre.title} className="img-genreDetail" />
      <p>Decada: {genre.decade}'s</p>
      <p className="parrafo">{genre.parrafo}</p>
    </div>
  );
};

export default GenreDetail;
