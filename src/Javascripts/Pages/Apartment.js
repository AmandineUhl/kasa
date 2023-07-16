import React from "react";
import Collapse from "../components/Collapse";
import ApartmentBanner from "../components/ApartmentBanner";


function Apartment() {
  return (
    <div className="apartment">
      <ApartmentBanner/>
      <div className="collapse">
        <Collapse />
        <Collapse />
      </div>
    </div>
  );
}

export default Apartment;
