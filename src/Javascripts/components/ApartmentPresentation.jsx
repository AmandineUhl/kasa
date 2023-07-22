import React from "react";

function Apartment_presentation(props) {
  
const fullName = props.host.name;

const [firstName, lastName] = fullName.split(' ');



  return (
    <div>
      <div className="apartment_presentation">
        <h1>{props.title}</h1>
        <h2>{props.location}</h2>
      </div>
      <div className="apartment_badges">
        {props.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="apartment_tenant">
        <div className="apartment_tenant_stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num}>
              <i
                style={{
                  color: props.rating >= num ? "#FF6060" : "#b0baba",
                }}
                className="fa-solid fa-star"
              ></i>
            </span>
          ))}
        </div>
        <div className="host">
        <h3> <p>{firstName}</p> <p>{lastName}</p> </h3>
        <img src={props.host.picture} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Apartment_presentation;
