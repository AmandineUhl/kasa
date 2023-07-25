import React from "react";
import Tags from "./Tags";
import Rating from "./Rating";

function Apartment_presentation(props) {
  const fullName = props.host.name;

  const [firstName, lastName] = fullName.split(" ");

  return (
    <div>
      <div className="apartment_presentation">
        <h1>{props.title}</h1>
        <h2>{props.location}</h2>
      </div>
      <Tags tags={props.tags} />
      <div className="apartment_tenant">
        <Rating rating={props.rating} />
        <div className="host">
          <h3>
            {" "}
            <p>{firstName}</p> <p>{lastName}</p>{" "}
          </h3>
          <img src={props.host.picture} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Apartment_presentation;
