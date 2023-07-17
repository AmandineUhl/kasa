import React from "react";

function Apartment_presentation(props) {
  
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
        <h3>
          {props.host.name} <img src={props.host.picture} alt="" />
        </h3>
      </div>
    </div>
  );
}

export default Apartment_presentation;
