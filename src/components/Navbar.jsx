import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="./logo_kasa.png" alt="logo" />
      </div>
      <a href="#" className="navbar_home">Acceuil</a>
      <a href="#" className="navbar_about">A propos</a>
    </nav>
  );
}

export default Navbar;
