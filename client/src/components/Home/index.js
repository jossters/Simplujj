import React from "react";
import { NavLink } from "react-router-dom";
import burger from "../../resources/png/burger.png";

//Stlyes imports
import { MenuButton, ImgLogo } from "./styles";
import { App } from "../../AppStyles";

export default function Home() {
  return (
    <App>
        <ImgLogo src={burger}  alt="logo" />
        <NavLink to="/Menu">
        <MenuButton className="Menu-Button">Our Menu</MenuButton>
        </NavLink>
    </App>
  );
};

