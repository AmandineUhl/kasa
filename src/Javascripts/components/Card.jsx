import React from "react";
import { Link } from "react-router-dom";

function Card(props) {

  const state = {
    flatId : props.id
  }

  return (
    <div>
      <div className="card">
        <Link to="/apartment" state={state}>
          <img src={props.image} alt="" />
          <h2 className="card_title">{props.title}</h2>
        </Link>
      </div>
    </div>
  );
}

export default Card;
