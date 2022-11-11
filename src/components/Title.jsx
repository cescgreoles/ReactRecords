import React from "react";
import "../styles/Title.scss";
import logoReact from "../assets/react_records_logo.png";

const Title = () => {
  return (
    <div className="title">
      <img className="title-img" src={logoReact} alt="logo-react" />
    </div>
  );
};

export default Title;
