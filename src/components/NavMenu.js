import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose} from 'react-icons/md'

// variable colors currently from globalStyles
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
  * {
  pointer-events: none;
}
}
.close-nav-icon {
  display: none;
}
// Media query includes CSS properties only if a certain condition is true.
@media only screen and (max-width: 768px) {
  padding: 0;
  .hide-item {
    transform: translateY(calc(-100% - var(--top)))
  }
  .mobile-menu-icon {
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

    --top: 1rem; //creates css variable
    top: var(--top); //using css variable

    //nested icon
    .close-nav-icon {
      display: block;
      width: 3rem;
      margin: 0 0 0 auto;
      cursor: pointer;
      //removes pointer event for nested div items - svg, path etc
      * {
        pointer-events: none;
      }
    }
    li{
      display: block;
      margin-bottom: 1rem;
    }
  }
}
`

export default function NavMenu() {
  // const [state, setstate function] = useState(initialState)
  //adds functionality to
  const [showNav, SetShowNav] = useState(false)
  return(
    <NavMenuStyle>
      <div className='mobile-menu-icon'
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}>
        <MdMenu />
      </div>
      <ul className={!showNav ? 'nav-items hide-item' : 'nav-items'}>
      {/* if false show nav items and hide item, if true just return nav tims */}
        <div
        className='close-nav-icon'
        onClick={() => SetShowNav(!showNav)}
        role="button"
        //selects the icon with tab and then allows you to press any key to run
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
        >
          <MdClose/>
        </div>
        <li>
          <NavLink
          //to remove navbar after linking to the path
          to="/"exact
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
          >Home</NavLink>
          </li>
          <li>
          <NavLink
          to="/projects"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
          >Projects</NavLink>
          </li>
          <li>
          <NavLink
          to="/contact"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}>Contact</NavLink>
          </li>
          <li>
          <NavLink
          to="/about"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}>About</NavLink>
          </li>
      </ul>
    </NavMenuStyle>
  )
}
