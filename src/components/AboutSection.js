import React from 'react'
import Button from './Button'
import ParagraphText from './ParagraphText'
import SectionTitle from './SectionTitle'
import Office from '../assets/images/office.jpg'
import styled from 'styled-components'
// import Magic from '../assets/images/magic.jpg'

const AboutSectionStyle = styled.div`
 padding; 10rem 0;
 .container {
   display: flex;
   align-items: center;
   justify-content: flex-start;
   text-align: left;
 }
 .about_section_right img{
   max-width: 500px;
   max-height: 400px;
   height: auto;
   width: auto;
  //  filter: sepia(100%);
   float: right;
 }

 .about_section_right,
 .about_section_left {
   flex: 1;
 }

 .section_title {
  text-align: left;
 }
 .paragraph {
   margin-top: 2rem;
   margin-left: 0;
 }
 .about_section_buttons {
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-top: 1rem;
   gap: 2rem;
 }
//similar to ipad size
 @media only screen and (max-width: 950px){
  .about_section_left {
    flex: 4;
  }
  .about_section_right: {
    flex: 3;
  }
 }

 @media only screen and (max-width: 768px){
   .container {
     flex-direction: column;
     text-align: center;
   }
   .about_section_right,
   .about_section_left {
     width: 100%;
   }
   .about_section_right{
     margin-top: 3rem;
   }
   .section_title {
     text-align: center;
   }
   .paragraph {
     margin: 0 auto;
     margin-top: 2rem;
   }
   .about_section_buttons {
     flex-direction: column;
     gap: 0;
    //  TODO -design decision, remove wrapper ?
     .button_wrapper,
     a {
       width: 100%;
       text-align: center;
     }
   }
 }
`


export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className='container'>
        <div className="about_section_left">
          <SectionTitle
          subtitle="Let me reintroduce myself my name is Hov"
          title="About me !!!"
          />
          <ParagraphText>
          Gingerbread jelly-o I love jujubes cheesecake liquorice dragée icing toffee. Ice cream shortbread powder I love bonbon. Gingerbread liquorice wafer ice cream I love chocolate chupa chups I love. Muffin gummi bears danish tootsie roll carrot cake toffee cheesecake.
          </ParagraphText>
          <div className="about_section_buttons">
            <Button
            btnLink='/projects'
            btnText='My Work💖'
            outline={false}/>
            <Button
            btnLink='/about'
            btnText='Learn More About Me'/>
          </div>
        </div>
        <div className="about_section_right">
          <img src={Office} alt=""/>
          {/* <img src={Magic} alt=""/> */}
        </div>
      </div>
    </AboutSectionStyle>
  )
}
