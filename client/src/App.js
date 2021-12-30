import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

//Styles
import "./App.css"
import { EverythingButtNav } from "./AppStyles";

//component
import NavMenu from "./components/NavMenu";
import Home from "./components/Home";
import Location from "./components/Locations";
import Menu from "./components/Menu";
import FoodDelivery from "./components/FoodDelivery";
import AboutUs from "./components/AboutUs";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <EverythingButtNav isOpen={isOpen} setIsOpen={setIsOpen}>
      <nav className="Nav-App-Wraper">
        <div className="Nav-App">
        <NavLink to="/">
        <div className="Nav-Title" >Simplujj</div>
        </NavLink>
      </div>
      {/* <button>Cart</button> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Food-Delivery" element={<FoodDelivery />} />
        <Route path="/About-Us" element={<AboutUs />} />
      </Routes>
      </EverythingButtNav>
    </Router>
  );
}
