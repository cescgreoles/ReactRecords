import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div>
      <div className="container-home">
        <Title />
        <Navbar />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
