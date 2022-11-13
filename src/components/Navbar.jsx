import "../styles/Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-list">
        <NavLink to="" activeclassname={"active"} className="navbar-list-item">
          Home
        </NavLink>
        <NavLink
          to="/artists"
          activeclassname={"active"}
          className="navbar-list-item"
        >
          Artists
        </NavLink>
        <NavLink
          to="/albums"
          activeclassname={"active"}
          className="navbar-list-item"
        >
          Albums
        </NavLink>
        <NavLink
          to="/genre"
          activeclassname={"active"}
          className="navbar-list-item"
        >
          Genre
        </NavLink>
        <NavLink
          to="/contact"
          activeclassname={"active"}
          className="navbar-list-item"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
