import React from "react";
import { Link } from "react-router-dom";

function Card(props) {

  const state = {
    flatId : props.id
  }

  return (
    <div>
      <div className="card">
        <img src={props.image} alt="" />
        <Link to="/apartment" state= {state} className="card_title">{props.title}</Link>
      </div>
    </div>
  );
}

export default Card;
