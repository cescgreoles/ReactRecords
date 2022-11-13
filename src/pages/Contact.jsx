import React, { useState } from "react";
import ButtonBack from "../components/ButtonBack";

const INITIAL_STATE = {
  name: "",
  lastName: "",
  location: "",
  mensaje: "",
};

const Contact = (props) => {
  const [state, setState] = useState(INITIAL_STATE);

  const submitForm = (ev) => {
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setState({ ...state, [name]: value });
  };

  return (
    <form onSubmit={submitForm}>
      <ButtonBack />
      <fieldset>
        <label>
          <p>Nombre</p>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Apellidos</p>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Ciudad</p>
          <input
            type="text"
            name="location"
            value={state.location}
            onChange={handleInput}
          />
        </label>

        <label>
          <p>Mensaje</p>
          <input
            type="text"
            name="mensaje"
            value={state.mensaje}
            onChange={handleInput}
          />
        </label>

        <div>
          <button type="submit">Guardar Perfil</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Contact;
