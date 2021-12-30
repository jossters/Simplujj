import { React } from "react";
import { NavLink } from "react-router-dom";

//Stlyes imports
import { StyledMenu, StyledBurger } from "../Navstyles.js";
import "../App.css";

//SVG imports
import Home from "../icons/home.svg";
import Location from "../icons/location.svg";
import Food from "../icons/menu.svg";
import Delivery from "../icons/food-delivery.svg";
import About from "../icons/about-us.svg";

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <StyledMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <NavLink to="/">
        <span role="img" aria-label="Home">
          {" "}
          <img src={Home} className="navsvg" alt="home" />{" "}
        </span>
        Home
      </NavLink>
      <NavLink to="/location">
        <span role="img" aria-label="Locations">
          {" "}
          <img src={Location} className="navsvg" alt="Locations" />{" "}
        </span>
        Locations
      </NavLink>
      <NavLink to="/menu">
        <span role="img" aria-label="Menu">
          {" "}
          <img src={Food} className="navsvg" alt="Menu" />{" "}
        </span>
        Menu
      </NavLink>
      <NavLink to="/food-delivery">
        <span role="img" aria-label="Food Delivery">
          {" "}
          <img src={Delivery} className="navsvg" alt="Food Delivery" />{" "}
        </span>
        Food Delivery
      </NavLink>
      <NavLink to="/about-us">
        <span role="img" aria-label="about us">
          {" "}
          <img src={About} className="navsvg" alt="About us" />{" "}
        </span>
        About us
      </NavLink>
    </StyledMenu>
  );
};

const Burger = ({ isOpen, setIsOpen }) => {
  return (
    <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Nav;
