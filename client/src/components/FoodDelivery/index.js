import React from "react";
//Stlyes imports
import { App } from "../../AppStyles";
import { Div, Button } from "./styles";

import DoorDash from "../../resources/png/2560px-DoorDash_Logo.svg.png";
import GrubHub from "../../resources/png/2560px-GrubHub_Logo_2016.svg.png";
import UberEats from "../../resources/png/2560px-Uber_Eats_2018_logo.svg.png";

export default function FoodDelivery() {
  const doordashClick = () => {
    window.open("https://www.doordash.com/");
  };
  const grubhubClick = () => {
    window.open("https://www.grubhub.com/");
  };
  const ubereatsClick = () => {
    window.open("https://www.ubereats.com/");
  };
  return (
    <App>
      <h1>Food Delivery</h1>
      <div>
        <Div>
          <Button onClick={doordashClick}>
            <img alt="DoorDash" src={DoorDash} />
          </Button>
        </Div>

        <Div>
          <Button onClick={grubhubClick}>
            <img alt="DoorDash" src={GrubHub} />
          </Button>
        </Div>

        <Div>
          <Button onClick={ubereatsClick}>
            <img alt="DoorDash" src={UberEats} />
          </Button>
        </Div>
      </div>
    </App>
  );
}
