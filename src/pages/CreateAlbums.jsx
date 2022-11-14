import React from "react";
import "../styles/CreateAlbums.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postAlbums } from "../redux/albums/albums.functions";
import Footer from "../components/Footer";
import Socials from "../components/Socials";

const CreateAlbums = () => {
  const { register, handleSubmit } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const createAlbum = async (formdata) => {
    dispatch(postAlbums(formdata, navigate));
    console.log(formdata);
  };
  return (
    <section className="section-create">
      <h2>Create your best Album!</h2>
      <form onSubmit={handleSubmit(createAlbum)} className="form-create">
        <div>
          <label>Name</label>
          <input type="text" name="name" {...register("name")}></input>
        </div>
        <div>
          <label>Group Name</label>
          <input
            type="text"
            name="groupName"
            {...register("groupName")}
          ></input>
        </div>
        <div>
          <label>Genre </label>
          <input type="text" name="genre" {...register("genre")}></input>
        </div>
        <div>
          <label>Year </label>
          <input type="number" name="year" {...register("year")}></input>
        </div>
        <div>
          <label>Discographic</label>
          <input
            type="text"
            name="discographic"
            {...register("discographic")}
          ></input>
        </div>
        <div>
          <label>image </label>
          <input type="text" name="img" {...register("img")}></input>
        </div>

        <button className="button-send-create">Enviar</button>
      </form>
      <Socials />
      <Footer />
    </section>
  );
};

export default CreateAlbums;
