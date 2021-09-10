import React from 'react'
import DoorImg from '../assets/images/door.jpg'
import Button from './Button'
import ParagraphText from './ParagraphText'
import InterestsArrow from '../assets/images/interests-arrow.svg'
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg'

export default function HeroSection() {
  return (
    <div>
      <div className='container'>
        <h1 className='hero_heading'>
        <span>Hello I'm</span>
          <span>Kay</span>
          </h1>
          <div className="door_img">
            <img src={DoorImg} alt=''/>
          </div>
          <div className='hero_info'>
            <ParagraphText> I am a child of PText component - Bonbon cotton candy cupcake cake macaroon. Tootsie roll chocolate cake chocolate muffin liquorice dessert wafer gummies. Gingerbread sugar plum dessert marzipan bear claw jelly beans cake brownie. Donut caramels donut donut tart carrot cake powder carrot cake bonbon.</ParagraphText>
          </div>
          <Button btnLink ='/projects' btnText='View My Work 🌸' outline={false}/>
          {/* props created by me: btnLink, btnText, outline - can be named whatever and can have multiple datatypes */}
      <div className='hero_interests'>
          <div className='hero_interests_indicator'>
            <p>customize me</p>
            <img src={InterestsArrow} alt=''/>
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
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div className="hero_scrolldown">
      <p>scroll</p>
      <img src={ScrollDownArrow} alt=''/>
      </div>
    </div>
  </div>
  )
}
