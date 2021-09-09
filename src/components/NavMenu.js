import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose} from 'react-icons/md'

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
//mobile options
.mobile-menu-icon {
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 4rem;
  cursor: pointer;
  // only want to see this on a mobile device
  display: none;
  outline: none;
}
.close-nav-icon {
  display: none;
}
// Media query includes CSS properties only if a certain condition is true.
@media only screen and (max-width: 768px) {
  .mobile-menu-icon {
    display: block;
  }
  .close-nav-icon {
    display: block;
  }
  .nav-items {

    transition: 0.3 ease transform;
    background-color: var(--deep-dark);
    padding: 2rem;
    width: 90%;
    max-width: 300px;
    border-radius: 12px;
    position: absolute;
    right: 1rem;
    //creates css variable
    --top: 1rem;
    top: var(--top);
  }
}
`

export default function NavMenu() {
  return(
    <NavMenuStyle>
      <div class='mobile-menu-icon'>
        <MdMenu />
      </div>
      <ul className="nav-items">
        <div className='close-nav-icon'>
          <MdClose/>
        </div>
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
