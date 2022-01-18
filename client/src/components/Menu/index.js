import React, { useState } from "react";
import styled from "styled-components";
import "../../App.css";
import { burgers, drinks, sides, tabs } from "../../resources/data/data";

const Tab = styled.button`
  font-size: 4vmin;
  height: 7vmin;
  width: 20vmin;
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
    border-bottom: 2px solid red;
    opacity: 1;
  `}
`;

export default function Menu() {
  const [active, setActive] = useState(tabs[0]);

  const burgerMenu = burgers.map((data, key) => {
    return (
      <div className="Menu-items" key={key}>
        <div className="Image-item">{data.image}</div>
        <div className="Title-item">{data.title}</div>
        <div className="Price-item">{data.price}</div>
      </div>
    );
  });

  const drinksMenu = drinks.map((data, key) => {
    return (
      <div className="Menu-items" key={key}>
        <div className="Image-item">{data.image}</div>
        <div className="Title-item">{data.title}</div>
        <div className="Price-item">{data.price}</div>
      </div>
    );
  });

  const sidesMenu = sides.map((data, key) => {
    return (
      <div className="Menu-items" key={key}>
        <div className="Image-item">{data.image}</div>
        <div className="Title-item">{data.title}</div>
        <div className="Price-item">{data.price}</div>
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
      <h1 className="H1-Menu"> Menu </h1>
      <div className="Tab-Menu">
        {tabs.map((tab) => (
          <Tab key={tab} active={active === tab} onClick={() => setActive(tab)}>
            {tab}
          </Tab>
        ))}
      </div>
      <div className="Entire-Items-Menu">
        <div className="Items-Menu">{renderMenu()}</div>
      </div>
    </div>
  );
}
