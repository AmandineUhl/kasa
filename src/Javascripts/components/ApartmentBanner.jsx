import React, { useState } from "react";

function Apartment_banner(props) {
  const [carousel, setCarousel] = useState(0);

  const prevImage = () => {
    setCarousel((prevIndex) =>
      prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCarousel((prevIndex) =>
      prevIndex === props.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="apartment_caroussel">
        <i className="fas fa-chevron-left arrow_left" onClick={prevImage}></i>
        <img src={props.pictures[carousel]} alt="" />
        <i className="fas fa-chevron-right arrow_right" onClick={nextImage}></i>
      </div>
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

export default Apartment_banner;
