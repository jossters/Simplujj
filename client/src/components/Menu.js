import React, {useState} from "react";
import "../App.css";
import { burgers, drinks, sides, tabs } from "../data";


export default function Menu() {
    const [active, setActive] = useState(tabs[0]);
    
    const burgerMenu = burgers.map((data, key) => {
        return (
          <div className="Menu-items" key={key}>
            {data.title + "," + data.description + "," + data.price + "," + data.image}
          </div>
        );
      })
    
    const drinksMenu = drinks.map((data, key) => {
        return (
          <div className="Menu-items" key={key}>
            {data.title + "," + data.description + "," + data.price + "," + data.image}
          </div>
        );
      })

      const sidesMenu = sides.map((data, key) => {
        return (
          <div className="Menu-items" key={key}>
            {data.title + "," + data.description + "," + data.price + "," + data.image}
          </div>
        );
      })
    const renderMenu = () => {
        if (active === "Burgers") {
          return burgerMenu;
        } else if (active === "Drinks") {
          return drinksMenu;
        } else {
            return sidesMenu;

          }
      }
 
  return (
    <div className="App">
      <header className="App-header">
          {tabs.map(tab  => (
              <div
              key={tab}
              active={active === tab}
              onClick={() => setActive(tab)}
              >
                  {tab}
              </div>

          ))}
        {renderMenu()}  
      </header>
    </div>
  );
}
