import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import { burgers, drinks, sides, tabs } from "../data";

const Tab = styled.button`
  height: 40px;
  width: 100px;
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid blue;
    opacity: 1;
  `}
`;

export default function Menu() {
  const [active, setActive] = useState(tabs[0]);

  const burgerMenu = burgers.map((data, key) => {
    return (
      <div className="Menu-items" key={key}>
       <div>{ data.image }</div> 
       <div>{data.title}</div>
       <div>{data.price}</div>
      </div>
    );
  });

  const drinksMenu = drinks.map((data, key) => {
    return (
      <div className="Menu-items" key={key}>
       <div>{ data.image }</div> 
       <div>{data.title}</div>
       <div>{data.price}</div>
      </div>
    );
  });

  const sidesMenu = sides.map((data, key) => {
    return (
      <div className="Menu-items" key={key}>
       <div>{ data.image }</div> 
       <div>{data.title}</div>
       <div>{data.price}</div>
      </div>
    );
  });
  const renderMenu = () => {
    if (active === "Burgers") {
      return burgerMenu;
    } else if (active === "Drinks") {
      return drinksMenu;
    } else {
      return sidesMenu;
    }
  };

  return (
    <div className="App-Menu">
      <div className="Hole-Menu">
        <h1 className="H1-Menu"> Menu </h1>
        <div className="hole-tab">
        <div className="Hole-Menu">
          
      <div className="Tab-Menu">
        {tabs.map((tab) => (
          <Tab key={tab} active={active === tab} onClick={() => setActive(tab)}>
            {tab}
          </Tab>
        ))}
        </div>
        {renderMenu()}
        </div>
        </div>
        </div>
    </div>
  );
}
