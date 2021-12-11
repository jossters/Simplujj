import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//component
import NavMenu from "./components/NavMenu";
import Home from "./components/Home";
import Location from "./components/Locations";
import Menu from "./components/Menu";
import FoodDelivery from "./components/FoodDelivery";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <Router>
      <NavMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Food-Delivery" element={<FoodDelivery />} />
        <Route path="/About-Us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
