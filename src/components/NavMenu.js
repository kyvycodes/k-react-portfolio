import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// variable colors from globalStyles
const NavMenuStyle = styled.div`
background-color: var(--dark-bg);
position: fixed;
z-index: 100;
top: 0;
left: 0;
width: 100%;
padding: 1rem 0;
ul{
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  text-align: center;
  li {
    display: inline-block;
    border-radius: 8px;
    transition: 0.3s ease background-color;
    &:hover {
      background-color: var(--deep-dark);
    }
  }
  a {
    display: inline-block;
    font-family: 'RobotoMono Regular';
    padding: 1rem 2rem;
    font-size: 2rem;
    color: var(--gary-1);
    outline: none;
  }
  .active {
    color: #FFC0CB;
  }
}
`

export default function NavMenu() {
  return(
    <NavMenuStyle>
      <ul>
        <li>
          <NavLink to="/"exact>Home</NavLink>
          </li>
          <li>
          <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
          <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
          <NavLink to="/about">About</NavLink>
          </li>
        {/* <li>Projects</li> */}
        {/* <li>Contact</li>
        <li>Passions</li> */}
      </ul>
    </NavMenuStyle>
  )
}
