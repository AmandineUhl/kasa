import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import backgroundImage from "../assets/banner.jpg";

function HomePage() {
  return (
    <div className="home_page">
      <Banner backgroundImage={backgroundImage} />
      <div className="home_page_title">
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <Gallery />
    </div>
  );
}

export default HomePage;
