import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Javascripts/Pages/HomePage";
import Apartment from "./Javascripts/Pages/Apartment";
import About from "./Javascripts/Pages/About";
import Error from "./Javascripts/Pages/Error";

const RoutesConf = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apartment" element={<Apartment />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesConf;
