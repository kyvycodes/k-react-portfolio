import React from 'react'
import Button from './Button'
import ParagraphText from './ParagraphText'
import SectionTitle from './SectionTitle'
import Magic from '../assets/images/magic.jpg'
import Office from '../assets/images/office.jpg'


export default function AboutSection() {
  return (
    <div>
      <div className='container'>
        <div className="about_section_left">
          {/* Section title and sub title uses a component to keep the code dry */}
          <SectionTitle
          className="section_title"
          subtitle="Let me reintroduce myself my name is Hov"
          title="About me !!!"
          />
          <ParagraphText>
          Gingerbread jelly-o I love jujubes cheesecake liquorice dragée icing toffee. Ice cream shortbread powder I love bonbon. Gingerbread liquorice wafer ice cream I love chocolate chupa chups I love. Muffin gummi bears danish tootsie roll carrot cake toffee cheesecake.
          </ParagraphText>
          <div className="about_section_buttons">
            <Button
            btnLink='/projects'
            btnText='MyWork💖'
            outline={false}/>
            <Button
            btnLink='/about'
            btnText='Learn More About Me'/>
          </div>
        </div>
        <div className="about_section_right">
          <img src={Office} alt=""/>
        </div>
      </div>
    </div>
  )
}
