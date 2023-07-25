import React from "react";

function Banner({ backgroundImage }) {
  return (
    <div className="banner">
      <img src={backgroundImage} alt="" />
    </div>
  );
}

export default Banner;
