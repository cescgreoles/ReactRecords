import React from "react";
import "../styles/AboutUs.scss";
import ButtonBack from "../components/ButtonBack";

import Footer from "../components/Footer";
import Title from "../components/Title";

const AboutUs = () => {
  return (
    <div>
      <ButtonBack />
      <Title />
      <div className="about-us-div">
        <p>
          REACT Recordings es una compañía discográfica independiente
          gallega-catalana fundada en 2022 por Daniel Sánchez y Ricardo Graña y
          Cesc Greoles. Es una de las discográficas más expansivas de la música
          independiente en Europa y que ha prevalecido hasta el día de hoy. Es
          partidaria igual de la compañía REACT Group.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
