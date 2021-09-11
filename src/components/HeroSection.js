import React from 'react'
import DoorImg from '../assets/images/door.jpg'
import Button from './Button'
import ParagraphText from './ParagraphText'
import styled from 'styled-components'
import Hero from '../assets/images/hero.png'
import Interests from '../assets/images/interests-arrow.svg'
import ScrollDown from '../assets/images/scroll-down-arrow.svg'

const HeroStyles = styled.div`
.hero_section{
  height: 100vh;
  min-height: 1000px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  //so that child can be absolute
}
.hero_heading {
  font-size: 1.5rem;
  margin-bottom: -5.5rem;
  position: relative;
  span {
    display: inline-block;
    width: 100%;
    color: var(--white)
  }
  .hero_name {
    font-size: 6rem;
    //TODO change font
    // font-family:
    color: var(--white)
  }
}
.door_img {
  max-width: 900px;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  border: 2px solid var(--gray-1);
}

.hero_info {
  margin-top: -20rem;

}

.hero_interests,
.hero_scroll_down {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  width: 50px;
  p {
    font-size: 1.6rem;
    transform: translateY(-70px) rotate(90deg); //rotates text
    letter-spacing: .7rem; //increases visibility
    text-transform: uppercase;
  }
  img{
    max-height: 45px;
    width: 16px;
    margin: 0 auto;
    object-fit: contain;
  }
}
.hero_scroll_down {
//   p {
//     transform: translateY(-70px) rotate(90deg); //rotates text
//  }
    img {
    max-height: 70px;
  }
}

.hero_interests_text {
  ul {
    li {
      margin-bottom: 1rem;
    }
    a {
      display: inline-block;
      font: 1.4rem;
      transform: rotate(-90deg);
      // letter-spacing: 5px;
      margin-bottom: 1.5rem;
    }
  }
}

`


export default function HeroSection() {
  return (
    <HeroStyles>
      <div className='hero_section'>
      <div className='container'>
        <h1 className='hero_heading'>
         <span>Hello I'm </span>
          <span className="hero_name">Kay Hardeman</span>
          </h1>
          <div className="door_img">
            <img src={DoorImg} alt=''/>
          </div>
          <div className="hero_info">
            <ParagraphText> I am a child of PText component - Bonbon cotton candy cupcake cake macaroon. Tootsie roll chocolate cake chocolate muffin liquorice dessert wafer gummies. </ParagraphText>
            <Button btnLink ='/projects' btnText='View My Work 🌸' outline={false}/>
          {/* props created by me: btnLink, btnText, outline - can be named whatever and can have multiple datatypes */}
          </div>
      <div className='hero_interests'>
          <div className='hero_interests_indicator'>
            <p>customize me</p>
            <img src={Interests} alt=''/>
            </div>
            <div className='hero_interests_text'>
              <ul>
                <li>
                  {/* linkedin example for now */}
                  <a href="https://linkedin.com/in/kay-hardeman/"
                  // opens new browser window
                  target='_blank'
                  rel="noreferrer">
                  LI
                  </a>
                  </li>
                  <li>
                  <a href="https://linkedin.com/in/kay-hardeman/"
                  target='_blank'
                  rel="noreferrer">
                  LI
                  </a>
                  </li>
                  <li>
                  <a href="https://linkedin.com/in/kay-hardeman/"
                  target='_blank'
                  rel="noreferrer">
                  LI
                  </a>
                  </li>
              </ul>
          </div>
      </div>
      <div className="hero_scroll_down">
      <p>scroll</p>
      <img src={ScrollDown} alt=''/>
      </div>
    </div>
  </div>
  </HeroStyles>
  )
}
