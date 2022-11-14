import "../styles/DeleteAlbums.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateAlbums = () => {
  const { register, handleSubmit } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  //   const albumToDelete = async (formdata) => {
  //     dispatch(deleteAlbums(formdata, navigate));
  //   };
  return;
};

export default CreateAlbums;
