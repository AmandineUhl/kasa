import React from "react";

function Apartment() {
  return (
    <div className="apartment">
      <div className="apartment_caroussel">
        <img src="./images/banner.jpg" alt="" />
      </div>
      <div className="apartment_presentation">
        <h1>Crazy loft on canal Saint martin</h1>
        <h2>Paris, ile de france</h2>
        <p>Cozy</p>
        <p>Canal</p>
        <p>Paris</p>
      </div>
      <div className="apartment_tenant">
        <h3>Alexandre Dumas</h3>
        <div className="apartment_tenant_badge"></div>
        <div className="apartment_tenant_stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="collapse">
          <p>Description</p>
          <p>fihez iohf eziohf oifehz fhezohfoh ez ezfh ohfezoi  ehfmhzhf ogrm egoi mj mhr gmh ermg g rmzgh h iorhg ozhùi</p>
        </div>
        <div className="collapse">
          <p>Equipements</p>
          <p>fihez iohf eziohf oifehz fhezohfoh ez ezfh ohfezoi  ehfmhzhf ogrm egoi mj mhr gmh ermg g rmzgh h iorhg ozhùi</p>
        </div>
      </div>
    </div>
  );
}

export default Apartment;
