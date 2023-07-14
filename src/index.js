import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./Javascripts/Pages/App";
import Apartment from "./Javascripts/Pages/Apartment";
import About from "./Javascripts/Pages/About";
import Error from "./Javascripts/Pages/Error";
import reportWebVitals from "./Javascripts/Tests/reportWebVitals";
import Navbar from "./Javascripts/layout/Navbar";
import Footer from "./Javascripts/layout/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
