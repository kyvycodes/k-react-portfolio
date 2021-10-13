import React from 'react'
import DoorImg from '../assets/images/door.jpg'
import Button from './Button'
import ParagraphText from './ParagraphText'
import styled from 'styled-components'
import Interests from '../assets/images/interests-arrow.svg'
import ScrollDown from '../assets/images/scroll-down-arrow.svg'

const HeroStyles = styled.div`
font-family: 'Poppins', sans-serif;

.hero_section{
  height: 80vh;
  min-height: 1000px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;   //so that child can be absolute

}
.hero_heading {
  font-size: 4.2rem;
  font-family: 'Ephesis Regular';
  margin-bottom: -45rem;

  position: relative;
  color: white;
}

.shadow {
  box-shadow: 0 0 1em #e6afb5;
}

.shrink {
  font-size: 2.8rem
}

.door_img {
  width: 100%;
  height: 100%;
}

.hero_interests,
.hero_scroll_down {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 20px;
  width: 50px;
}

.hero_interests {
  left: 50px;
}
.hero_scroll_down {
  right: 50px;

}

.hero_interests_indicator,
.hero_scroll_down {
  img{
    max-height: 45px;
    width: 16px;
    margin: 0 auto;
    max-height: 70px;
    object-fit: contain;
    color: #e6b396
  }
}

.mobile_btn {
  margin-top: 50px;
}


@media only screen and (max-width: 768px) {

  //TODO BUG add space at the top of image or move button down

  .hero_section {
    min-height: 750px;
  }

  .mobile_btn {
    margin-top: 20px;👩🏽‍💻
  }

  .hero_heading {
    font-size: 2.5rem;
    margin-top: 10rem;
  }

  .door_img {
    margin-top: 10px;
    height: 80vh;
    width: 100%;
  }

  .hero_interests,
  .hero_scroll_down {
    display: none;
  }
}
`


export default function HeroSection() {
  return (
    <HeroStyles>
      <div className='hero_section'>
      <div className='container'>
        <div className='hero_heading'>
        <p className='shadow'>Open, inventive, engaging, diverse creator. Welcome <span className='shrink'>✨</span> </p>

        <Button className='mobile_btn' btnLink ='/projects' btnText='View My Work' outline={false}/>
          {/* props created by me: btnLink, btnText, outline - can be named whatever and can have multiple datatypes */}
          </div>
          <div className="door_img">
            <img src={DoorImg} alt=''/>
          </div>

      <div className='hero_interests'>
          <div className='hero_interests_indicator'>
            {/* <p>scroll</p> */}
            <img src={ScrollDown} alt=''/>
            </div>
            <div className='hero_interests_text'>
          </div>
      </div>
      <div className="hero_scroll_down">
      <p></p>
      <img src={ScrollDown} alt=''/>
      </div>
    </div>
  </div>
  </HeroStyles>
  )
}
