import React from "react";
import { NavLink } from "react-router-dom";
import burger from "../burger.png";
import "../App.css";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={burger} className="App-logo" alt="logo" />
        <NavLink to="/Menu">
        <button className="Menu-Button">Our Menu</button>
        </NavLink>
      </header>
    </div>
  );
};

