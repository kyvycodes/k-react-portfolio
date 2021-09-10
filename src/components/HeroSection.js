import React from 'react'
import DoorImg from '../assets/images/door.jpg'
import Button from './Button'
import ParagraphText from './ParagraphText'
import InterestsArrow from '../assets/images/interests-arrow.svg'
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg'
import styled from 'styled-components'
import Hero from '../assets/images/hero.png'

const HeroStyles = styled.div`
.hero {
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
.hero_scroll_down{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
}
`


export default function HeroSection() {
  return (
    <HeroStyles>
      <div className='hero'>
      <div className='container'>
        <h1 className='hero_heading'>
         <span>Hello I'm </span>
          <span className="hero_name">Kay Hardeman</span>
          </h1>
          <div className="door_img">
            {/* <img src={DoorImg} alt=''/> */}
            <img src={ DoorImg } />
          </div>
          <div className='hero_info'>
            <ParagraphText> I am a child of PText component - Bonbon cotton candy cupcake cake macaroon. Tootsie roll chocolate cake chocolate muffin liquorice dessert wafer gummies. Donut caramels donut donut tart carrot cake powder carrot cake bonbon.</ParagraphText>
          </div>
          <Button btnLink ='/projects' btnText='View My Work 🌸' outline={false}/>
          {/* props created by me: btnLink, btnText, outline - can be named whatever and can have multiple datatypes */}
      <div className='hero_interests'>
          <div className='hero_interests_indicator'>
            <p>customize me</p>
            {/* <img src={InterestsArrow} alt=''/> */}
            <div className='interests_text'>
              <ul>
                <li>
                  {/* linkedin example for now */}
                  <a href="https://linkedin.com/in/kay-hardeman/"
                  // opens new browser window
                  target='_blank'
                  rel="noreferrer">
                  LI
                  </a>
                  <a href="https://linkedin.com/in/kay-hardeman/"
                  // opens new browser window
                  target='_blank'
                  rel="noreferrer">
                  LI
                  </a>
                  <a href="https://linkedin.com/in/kay-hardeman/"
                  // opens new browser window
                  target='_blank'
                  rel="noreferrer">
                  LI
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div className="hero_scroll_down">
      <p>scroll</p>
      {/* <img src={ScrollDownArrow} alt=''/> */}
      </div>
    </div>
  </div>
  </HeroStyles>
  )
}
