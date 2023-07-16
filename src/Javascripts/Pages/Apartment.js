import React, { useEffect, useState, useCallback } from "react";
import Collapse from "../components/Collapse";
import ApartmentBanner from "../components/ApartmentBanner";
import { useLocation } from "react-router-dom";

function Apartment() {
  const location = useLocation();
  const [selectFlat, setSelecFlat] = useState(null);

  const fetchFlat = useCallback(() => {
    fetch('GalleryData.json')
      .then(res => res.json())
      .then(flats => {
        const flat = flats.find(flat => flat.id === location.state.flatId);
        setSelecFlat(flat);
      })
      .catch(console.error);
  }, [location.state.flatId]);

  useEffect(() => {
    fetchFlat();
  }, [fetchFlat]);

  if (selectFlat == null) return <div>...Lodding</div>;

  return (
    <div className="apartment">
      <ApartmentBanner {...selectFlat} />
      <div className="collapse">
        <Collapse />
        <Collapse />
      </div>
    </div>
  );
}

export default Apartment;
