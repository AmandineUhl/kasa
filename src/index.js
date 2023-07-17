import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./Javascripts/Tests/reportWebVitals";
import Navbar from "./Javascripts/layout/Navbar";
import Footer from "./Javascripts/layout/Footer";
import RoutesConf  from "./RoutesConf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <RoutesConf />
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
