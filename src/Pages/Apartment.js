import React from "react";
import Collapse from "../components/Collapse";
import ApartmentPresentation from "../components/ApartmentPresentation";
import Carousel from "../components/Carousel";
import { useParams, Navigate } from "react-router-dom";
import GalleryData from "../GalleryData.json";

function Apartment() {
  const { flatId } = useParams();
  const selectFlat = GalleryData.find((flat) => flat.id === flatId);

  if (!selectFlat) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="apartment">
      <Carousel pictures={selectFlat.pictures} />
      <ApartmentPresentation {...selectFlat} />
      <div className="collapse">
        <Collapse title="Description" content={selectFlat.description} />
        <Collapse title="Equipements" content={selectFlat.equipments} />
      </div>
    </div>
  );
}

export default Apartment;
