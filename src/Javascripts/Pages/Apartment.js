import React, { useEffect } from "react";
import Collapse from "../components/Collapse";
import ApartmentBanner from "../components/ApartmentBanner";
import { useLocation } from "react-router-dom";

function Apartment() {
  const location = useLocation();
  //console.log("emplacement :", location.state);

  useEffect(() => {
    fetchFlat();
  }, []);

  function fetchFlat() {
    fetch('GalleryData.json')
      .then(res => res.json())
      .then((flats) => {
        const selectFlat = flats.find(flat => flat.id === location.state);
        console.log(selectFlat);
      })
      .catch(console.error);
  }

  return (
    <div className="apartment">
      <ApartmentBanner />
      <div className="collapse">
        <Collapse />
        <Collapse />
      </div>
    </div>
  );
}

export default Apartment;
