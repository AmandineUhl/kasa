import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Apartment from "./Pages/Apartment";
import About from "./Pages/About";
import Error from "./Pages/Error";

const RoutesConf = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apartment/:flatId" element={<Apartment />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RoutesConf;
