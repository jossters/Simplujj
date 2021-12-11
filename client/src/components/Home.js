import React from "react";
import burger from "../burger.png";
import "../App.css";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={burger} className="App-logo" alt="logo" />
        <span></span>
        <p>Simplujj Burgers</p>
      </header>
    </div>
  );
};

