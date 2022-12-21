import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/netflix.png";
import { FaSistrix } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <img src={Logo} alt="logo" />
      <div>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/moviess">Movies</Link>
        <Link to="/recentlyadded">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <FaSistrix />
    </nav>
  );
};

export default Header;
