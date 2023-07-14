import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="./images/logo_kasa.png" alt="logo" />
      </div>
      <div className="navbar_links">
        <Link to="/">
          <div className="navbar_home">Accueil</div>
        </Link>
        <Link to="./about">
          <div className="navbar_about">À propos</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
