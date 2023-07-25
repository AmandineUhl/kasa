import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div>
      <div className="card">
        <Link
          to={{
            pathname: `/apartment/${props.id}`,
            state: { flatId: props.id },
          }}
        >
          <img src={props.image} alt="" />
          <h2 className="card_title">{props.title}</h2>
        </Link>
      </div>
    </div>
  );
}

export default Card;
