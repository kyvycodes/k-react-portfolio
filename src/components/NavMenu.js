import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose} from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'


const NavMenuStyle = styled.div`
position: fixed;
z-index: 100;
top: 0;
width: 100%;
// left: 0;

.name {
  font-family: 'Ephesis Regular'  ;
  font-size: 3rem;
  color: #111111 ;
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

.linkedin {
  // // left: 1rem;
  // // top: 1rem;
  // // width: 3rem;
  // // cursor: pointer;
  // outline: none;
  // display: block;
  // width: 3rem;
  // margin: 0 0 0 auto;
  // cursor: pointer;
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 4rem;
  cursor: pointer;
  outline: none;
  * {
  pointer-events: none;
}


// ul{
//   max-width: 1200px;
//   margin: 0 auto;
//   width: 90%;
//   text-align: center;
//   li {
//     display: inline-block;
//     // display: flex;
//     justify-content: space-between;
//     border-radius: 8px;
//     transition: 0.3s ease background-color;
//     &:hover {
//       background-color: var(--deep-dark);
//     }
//   }


//   a {
//     // display: inline-block;
//     display: flex;
//     justify-content: space-between;
//     font-family: 'WorkSans Regular';
//     padding: 1rem 2rem;
//     font-size: 2rem;
//     // color: #FFC0CB;
//     outline: none;
//   }
//   .active {
//     // color: #FFC0CB;
//     color: #271d1d;
//   }
// }
//mobile options

}

.hide-item {
  transform: translateY(calc(-100% - var(--top)))
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
    // <NavMenuStyle>
      // {/* <div className='name'>
      //   <p>Kay Hardeman</p>
      //   </div> */}

    //     <div className='mobile-menu-icon'
    //           onClick={() => SetShowNav(!showNav)}
    //           role="button"
    //           onKeyDown={() => SetShowNav(!showNav)}
    //           tabIndex={0}>
    //           <MdMenu />
    //           </div>
    //           <ul className={!showNav ? 'nav-items hide-item' : 'nav-items'}>
    //           {/* if false show nav items and hide item, if true just return nav tims */}
    //           <div
    //           className='close-nav-icon'
    //           onClick={() => SetShowNav(!showNav)}
    //           role="button"
    //           //selects the icon with tab and then allows you to press any key to run
    //           onKeyDown={() => SetShowNav(!showNav)}
    //           tabIndex={0}
    //           >
    //           <MdClose/>
    //           </div>
    //           <li>
    //           <NavLink
    //           //to remove navbar after linking to the path
    //           to="/"exact
    //           onClick={() => SetShowNav(!showNav)}
    //           role="button"
    //           onKeyDown={() => SetShowNav(!showNav)}
    //           tabIndex={0}
    //           >Home</NavLink>
    //           </li>
    //           <li>
    //           <NavLink
    //           to="/projects"
    //           onClick={() => SetShowNav(!showNav)}
    //           role="button"
    //           onKeyDown={() => SetShowNav(!showNav)}
    //           tabIndex={0}
    //           >Projects</NavLink>
    //           </li>
    //           <li>
    //           <NavLink
    //           to="/contact"
    //           onClick={() => SetShowNav(!showNav)}
    //           role="button"
    //           onKeyDown={() => SetShowNav(!showNav)}
    //           tabIndex={0}>Contact</NavLink>
    //           </li>
    //           <li>
    //           <NavLink
    //           to="/about"
    //           onClick={() => SetShowNav(!showNav)}
    //           role="button"
    //           onKeyDown={() => SetShowNav(!showNav)}
    //           tabIndex={0}>About</NavLink>
    //           </li>
    //           </ul>
    // </NavMenuStyle>


        <NavMenuStyle>
      <div className='name'>
        <p>Kay Hardeman</p>
        </div>
        <div className='linkedin'>
          <AiFillLinkedin />
        </div>
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


