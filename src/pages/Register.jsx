import React from "react";
import "../styles/Register.scss";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../redux/auth/auth.actions";
import { API } from "../shared/services/api";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = async (formdata) => {
    console.log(formdata);
    dispatch(newUser(formdata, navigate));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(registerUser)} className="login-form">
        <div className="div-text">
          <p className="p-label">Registrate!</p>
        </div>
        <div className="div-label">
          <label>
            Email
            <input
              type="text"
              name="email"
              {...register("email", {
                required: "Introduce un email, por favor",
                minLength: {
                  value: 2,
                  message: "el email tiene que ser mas largo",
                },
              })}
            />
          </label>
          {errors.email ? (
            <>
              {errors.email.type === "required" && (
                <p>{errors.email.message}</p>
              )}
              {errors.email.type === "minLength" && (
                <p>{errors.email.message}</p>
              )}
              {errors.email.type === "pattern" && <p>{errors.email.message}</p>}
            </>
          ) : null}
          <label>
            Password
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "El password tiene que existir",
              })}
            />
          </label>
          {errors.password ? <p>El password no es correcto</p> : null}
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
