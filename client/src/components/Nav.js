import React from 'react';
import { StyledMenu, StyledBurger } from '../Navstyles.js';
import '../App.css'
import Home from '../icons/home.svg';
import Location from '../icons/location.svg';
import Food from '../icons/menu.svg';
import Delivery from '../icons/food-delivery.svg';
import About from '../icons/about-us.svg'

const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <a href="/">
          <span role="img" aria-label="Home"> <img src={Home} className="navsvg" alt="home" /> </span>
          Home
        </a>
        <a href="/">
          <span role="img" aria-label="Locations"> <img src={Location} className="navsvg" alt="Locations" /> </span>
          Locations
          </a>
        <a href="/">
          <span role="img" aria-label="Menu"> <img src={Food} className="navsvg" alt="Menu" /> </span>
          Menu
          </a>
          <a href="/">
          <span role="img" aria-label="Food Delivery"> <img src={Delivery} className="navsvg" alt="Food Delivery" /> </span>
          Food Delivery
        </a>
        <a href="/">
          <span role="img" aria-label="about us"> <img src={About} className="navsvg" alt="About us" /> </span>
          About us
        </a>
      </StyledMenu>
    )
  }

  const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }

const Nav = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return(
        <div>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </div>
    );
}

export default Nav;