import React from 'react'
import DoorImg from '../assets/images/door.jpg'
import Button from './Button'
import ParagraphText from './ParagraphText'

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
      </div>
    </div>
  )
}
