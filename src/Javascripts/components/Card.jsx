import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div>
      <div className="card">
        <Link to="/apartment" className="card_title">Titre de la location</Link>
      </div>
    </div>
  );
}

export default Card;
