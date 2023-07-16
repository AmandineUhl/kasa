import React, { useEffect, useState } from "react"; 
import Card from "./Card";

function Gallery() { 
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchApartments();
  }, []);

  function fetchApartments() {
    fetch('GalleryData.json')
      .then(res => res.json())
      .then(res => setApartments(res))
      .catch(console.error);
  }

  return (
    <div className="gallery">
      {apartments.map(flat => (
        <Card key={flat.id} id={flat.id} title={flat.title} image={flat.cover}/> 
      ))}
    </div>
  );
}

export default Gallery; 