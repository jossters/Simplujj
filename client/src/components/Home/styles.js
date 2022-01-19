import styled from "styled-components";

export const MenuButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 2rem;
`;

export const ImgLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  margin: 50px 0px 100px 0px;

  @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin 2s ease 0s infinite alternate both;
  }
`;
