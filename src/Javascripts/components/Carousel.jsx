import React, { useState } from 'react';

function Carousel(props) {
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


  const showCounterAndArrow = props.pictures.length > 1;

  return (
    <div className="apartment_carousel">
      {showCounterAndArrow && (
        <i className="fas fa-chevron-left arrow_left" onClick={prevImage}></i>
      )}

      <img src={props.pictures[carousel]} alt="" />

      {showCounterAndArrow && (
        <i className="fas fa-chevron-right arrow_right" onClick={nextImage}></i>
      )}


      {showCounterAndArrow && (
        <div className="carousel_counter">
          {carousel + 1} / {props.pictures.length}
        </div>
      )}
    </div>
  );
}

export default Carousel;

