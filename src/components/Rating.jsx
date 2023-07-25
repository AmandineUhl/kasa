import React from "react";

function Rating(props) {
  return (
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
  );
}

export default Rating;
