import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import "../styles/Home.scss";
import Register from "./Register";
import Socials from "../components/Socials";

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
        <Socials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
