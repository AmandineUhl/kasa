import React, { useEffect, useState, useCallback } from "react";
import Collapse from "../components/Collapse";
import ApartmentPresentation from "../components/ApartmentPresentation";
import Carousel from "../components/Carousel";
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
      <Carousel pictures = {selectFlat.pictures}/>
      <ApartmentPresentation {...selectFlat} />
      <div className="collapse">
        <Collapse title="Description" content={selectFlat.description} />
        <Collapse title="Equipements" content={selectFlat.equipments}/>
      </div>
    </div>
  );
}

export default Apartment;
