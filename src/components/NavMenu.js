import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose} from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'


const NavMenuStyle = styled.div`
position: fixed;
z-index: 100;
top: 0;
width: 100%;
font-family: 'WorkSans Regular';


.name {
  font-family: 'Ephesis Regular';
  font-size: 4.3rem;
  color: #111111;
  text-align: center;
  padding:  1rem;
  border-bottom: 2px solid #e6b396;
  background-color: #f7f5f2 !important;
  margin: 0
}


.mobile-menu-icon {
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 4rem;
  cursor: pointer;
  outline: none;
  * {
  pointer-events: none;
}
.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.1); }

  li {
    display: inline-block;
    // display: flex;
    justify-content: space-between;
    border-radius: 8px;
    transition: 0.3s ease background-color;
    &:hover {
      background-color: var(--deep-dark);
    }

//TODO -update active
  // a {
  //   display: inline-block;
  //   padding: 1rem 2rem;
  //   font-size: 2rem;
  //   color: #FFC0CB;
  //   outline: none;
  // }
  // .active {
  //   color: #FFC0CB;
  //   opacity: .4;
  // }
}

// li:active {
//   color: #111111;
// }

}


.hide-item {
  transform: translateY(calc(-100% - var(--top)))
}
.nav-items {
  border-radius: 8px;
  --top: 1rem; //creates css variable
  transition: 0.3 ease transform;
  background-color: var(--deep-dark);
  padding: 2rem;
  width: 90%;
  max-width: 200px;
  font-size: 2rem;
  position: absolute;
  color: black;
  right: 1rem;
  top: var(--top); //using css variable

  .close-nav-icon {
    display: block;
    width: 3rem;
    margin: 0 0 0 auto;
    cursor: pointer;
    * {
      pointer-events: none;
    }
  }
  li{
    display: block;
    margin-bottom: 2rem;
    color: #111111 !important;
  }
}

.linkedin {
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 3.5rem;
  cursor: pointer;
  outline: none;
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
    --top: 1rem; //creates css variable
    transition: 0.3 ease transform;
    background-color: var(--deep-dark);
    padding: 2rem;
    width: 90%;
    max-width: 300px;
    border-radius: 12px;
    position: absolute;
    right: 1rem;
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
  //adds responsive functionality
  //const [state, setstate function] = useState(initialState)
  const [showNav, SetShowNav] = useState(false)
  return(
    <NavMenuStyle>
      <div className='name'>
        {/* TODO make name a link back to home, override css */}
        <p className='grow'>
          Kay Hardeman
          </p>
        </div>
           <div className='mobile-menu-icon'
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}>
              <MdMenu />
              </div>
              <div className='linkedin'>
                <a href='https://www.linkedin.com/in/kay-hardeman/' target='_blank' rel='noreferrer'>
              <AiOutlineLinkedin
              color='#87685a'/>
              </a>
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
              to="/about"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}>About</NavLink>
              </li>
              <li>
              <NavLink
              to="/contact"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}>Contact</NavLink>
              </li>
              </ul>
    </NavMenuStyle>
  )
}


