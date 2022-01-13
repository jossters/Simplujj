import React from "react";
import "../App.css";
import DoorDash from "../2560px-DoorDash_Logo.svg.png";
import GrubHub from "../2560px-GrubHub_Logo_2016.svg.png";
import UberEats from "../2560px-Uber_Eats_2018_logo.svg.png";

export default function FoodDelivery() {
    const doordashClick = () => {
        window.open(
          "https://www.doordash.com/"
        );
      };
      const grubhubClick = () => {
        window.open(
          "https://www.grubhub.com/"
        );
      };
      const ubereatsClick = () => {
        window.open(
          "https://www.ubereats.com/"
        );
      };
  return (
      
    <div className="App">
      <header className="App-header">
        <h1>Food Delivery</h1>
        <div className="responsiveA">

        <div className="responsive">
          <button className="pointer" onClick={doordashClick}>
            <img className="responsive" alt="DoorDash" src={DoorDash} />
          </button>
        </div>

        <div className="responsive">
          <button className="pointer" onClick={grubhubClick}>
            <img className="responsive" alt="DoorDash"  src={GrubHub} />
          </button>
        </div>

        <div className="responsive">
          <button className="pointer" onClick={ubereatsClick}>
            <img className="responsive" alt="DoorDash"  src={UberEats} />
          </button>
        </div>
        
        </div>
      </header>
    </div>
  );
}
