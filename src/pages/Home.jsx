import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import "../styles/Home.scss";
import Register from "./Register";

const Home = () => {
  return (
    <div>
      <div className="container-home">
        <Login />
        <Register />
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
