import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Colaboradores</h2>
      <div className="footer-links">
        <a
          href="https://github.com/ricardograna/ReactRecords"
          className="link-footer"
        >
          Ricardo Graña
        </a>
        <a
          href="https://github.com/imdaano/ReactRecords"
          className="link-footer"
        >
          Daniel Sánchez
        </a>
        <a
          href="https://github.com/cescgreoles/ReactRecords"
          className="link-footer"
        >
          Cesc Greoles
        </a>
      </div>
    </div>
  );
};

export default Footer;
