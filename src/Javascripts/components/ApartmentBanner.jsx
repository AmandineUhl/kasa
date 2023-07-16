import React from "react";

function Apartment_banner() {
  return (
    <div>
      <div className="apartment_caroussel">
        <img src="./images/banner.jpg" alt="" />
      </div>
      <div className="apartment_presentation">
        <h1>Crazy loft on canal Saint martin</h1>
        <h2>Paris, ile de france</h2>
      </div>
      <div className="apartment_badges">
        <span>Cozy</span>
        <span>Canal</span>
        <span>Paris 10</span>
      </div>
      <div className="apartment_tenant">
        <div className="apartment_tenant_stars">
          <span>
            <i className="fa-solid fa-star" style={{ color: "#FF6060" }}></i>
          </span>
          <span>
            <i className="fa-solid fa-star" style={{ color: "#FF6060" }}></i>
          </span>
          <span>
            <i className="fa-solid fa-star" style={{ color: "#FF6060" }}></i>
          </span>
          <span>
            <i className="fa-solid fa-star" style={{ color: "#b0baba" }}></i>
          </span>
          <span>
            <i className="fa-solid fa-star" style={{ color: "#b0baba" }}></i>
          </span>
        </div>
        <h3>
          Alexandre <br /> Dumas <div></div>
        </h3>
      </div>
    </div>
  );
}

export default Apartment_banner;
