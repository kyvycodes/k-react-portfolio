import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavMenu() {
  return(
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
          <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
          <NavLink to="/passions">About</NavLink>
          </li>
        {/* <li>Projects</li> */}
        {/* <li>Contact</li>
        <li>Passions</li> */}
      </ul>
    </div>
  )
}
