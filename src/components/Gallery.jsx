import React, { useEffect, useState } from "react";
import Card from "./Card";
import GalleryData from "../GalleryData.json";

function Gallery() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    setApartments(GalleryData);
  }, []);

  return (
    <div className="gallery">
      {apartments.map((flat) => (
        <Card
          key={flat.id}
          id={flat.id}
          title={flat.title}
          image={flat.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
