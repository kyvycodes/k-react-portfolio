import React from 'react'
import Button from './Button'
import ParagraphText from './ParagraphText'
import SectionTitle from './SectionTitle'
import Collage from '../assets/images/projectcollage.png'
import styled from 'styled-components'
import Cube from './Cube'

const AboutSectionStyle = styled.div`
 padding; 10rem 0;
 .container {
   display: flex;
   align-items: center;
   justify-content: flex-start;
   text-align: left;
 }
 .about_section_right img{
   max-width: 600px;
   max-height: 500px;
   height: auto;
   width: auto;
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
   margin-top: 1rem;
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
          subtitle=''
          title="About me 👩🏽‍💻"
          />
          <ParagraphText>A software engineer with a passion for teaching. I am dedicated to fine-tuning my skills through mentorship from more seasoned developers and tirelessly working toward self improvement by learning all I can on my own. I became an engineer to help shape the global tech landscape and a build bridge between the world I came from and the innovations I believe our future world will require.
          </ParagraphText>
          <div className="about_section_buttons">
            <Button
            btnLink='/projects'
            btnText='My Work'
            outline={false}/>
            <Button
            btnLink='/about'
            btnText='Learn More About Me'/>
          </div>
        </div>
        <div className="about_section_right">
          <img src={Collage} alt=""/>
          {/* <Cube/> */}
        </div>
      </div>
    </AboutSectionStyle>
  )
}
