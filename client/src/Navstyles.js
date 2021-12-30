import styled from 'styled-components'

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f2f4f3;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
 

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #49111c;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #a9927d;
    }

  }
`

export const StyledBurger = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 3rem;
  background: transparent;
  border: 2px solid  #ff0000;
  cursor: pointer;
  padding: 0;
  border: none;
  top: .65%;
  left: 2rem;


  &:focus {
    outline: none;
  }

  div {
    width: 3rem;
    height: 0.4rem;
    background: ${({ isOpen }) => isOpen ? 'black' : 'red'};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    z-index: 16;

    :first-child {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
      transform: ${({ isOpen }) => isOpen ? 'translateX(50px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
