import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postAlbums } from "../redux/albums/albums.functions";

const CreateAlbums = () => {
  const { register, handleSubmit } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const createAlbum = async (formdata) => {
    dispatch(postAlbums(formdata, navigate));
    console.log(formdata);
  };
  return (
    <form onSubmit={handleSubmit(createAlbum)}>
      <label>
        Name
        <input type="text" name="name" {...register("name")}></input>
      </label>

      <label>
        Group Name
        <input type="text" name="groupName" {...register("groupName")}></input>
      </label>
      <label>
        Genre
        <input type="text" name="genre" {...register("genre")}></input>
      </label>
      <label>
        Year
        <input type="number" name="year" {...register("year")}></input>
      </label>
      <label>
        Discographic
        <input
          type="text"
          name="discographic"
          {...register("discographic")}
        ></input>
      </label>
      <label>
        image
        <input type="text" name="img" {...register("img")}></input>
      </label>
      <button>Enviar</button>
    </form>
  );
};

export default CreateAlbums;
