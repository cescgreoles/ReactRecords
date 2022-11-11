import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Colaboradores</h2>
      <div className="footer-links">
        <a href="https://github.com/ricardograna/ReactRecords">Ricardo Graña</a>
        <a href="https://github.com/imdaano/ReactRecords">Daniel Sánchez</a>
        <a href="https://github.com/cescgreoles/ReactRecords">Cesc Greoles</a>
      </div>
    </div>
  );
};

export default Footer;
