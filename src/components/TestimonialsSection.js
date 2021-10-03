import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import SectionTitle from './SectionTitle'
import ParagraphText from './ParagraphText'
import styled from 'styled-components'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'
import { IoArrowForwardCircle } from 'react-icons/io5'
import testimonials from '../assets/data/testimonials'


const TestimonialsSectionStyle = styled.div`
padding: 10rem 0;
text-align: center;
// color: #FFC0CB;
.testimonial_wrapper {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}
.testimonial_info  {
  width: 100%;
  height: fit-content; //makes dynamic
  padding: 3rem;
  background-color: var(--deep-dark);
  border-radius: 12px;
  margin-top: 5rem;
}
.testimonial_description {
  .paragraph {
    text-align: center;
  }
}
.testimonial_name {
  margin-top: 4rem;
  font-family: 'Poppins SemiBold':
  font-size: 2.2rem;
}
.testimonial_title {
  font-size: 1.6rem;
  margin-top: 0.3rem;
}
.arrows {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg { //style only arrows
    width: 30px;
    pointer-events: none;
  }
  .prev,
  .next {
    margin: 0 0.5rem;
    width: fit-content;
    background-color: var(--deep-dark);
    padding: 0.5rem 2rem;
    border-radius: 8px;
    cursor: pointer;
  }
}
//inner transition
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
  transition: 250ms ease-in opacity;
}

//outer transition all within 300 ms
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0;
  transition: 250ms ease-in opacity;
}
`

export default function TestimonialsSection() {
  //mange index with useState
  // useState(0) will be the first item in the array of testimonial data
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = testimonials[activeIndex]
  // console.log('active', activeSlide)

  //handles previous and next item changes
  function handlePrevious(){
    if(activeIndex <=  0){
      setActiveIndex(testimonials.length-1)
    } else {
      setActiveIndex((currentIndex) => currentIndex - 1)
    }
  };

  function handleNext(){
    //if it is the last item
    if(activeIndex >=  testimonials.length-1){
      //reset to the first
      setActiveIndex(0)
    } else {
      setActiveIndex((currentIndex) => currentIndex + 1)
    }
  };

  return (
    <TestimonialsSectionStyle>
      <div className='container'>
      <SectionTitle
      subtitle='This is a test'
      title='this is testimonials'/>
      <div className='testimonial_wrapper'>
      {/* http://reactcommunity.org/react-transition-group/switch-transition */}
      <SwitchTransition>
      {/* http://reactcommunity.org/react-transition-group/css-transition */}
        <CSSTransition
        //decides when transition happens
        key={activeSlide.id}
        timeout={300}
        classNames='fade'
        >
          <div className='testimonial_info'>
            <div className='testimonial_description'>
                <ParagraphText>
                  {activeSlide.desc}
                </ParagraphText>
                <h2 className='testimonial_name'>
                {activeSlide.name}
                </h2>
                <p className='testimonial_title'>
                {activeSlide.title}, <br /> {activeSlide.org}
                </p>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
      </div>
      <div className='arrows'>
        <div
        className='prev'
        onClick={handlePrevious}
        role='button'
        tabIndex={0}
        onKeyDown={handlePrevious}
        >
         <MdArrowBack/>
        </div>
        <div
        className='next'
        onClick={handleNext}
        role='button'
        tabIndex={0}
        onKeyDown={handleNext}>
          {/* <MdArrowForward></MdArrowForward> */}
          <IoArrowForwardCircle/>
        </div>
      </div>
      </div>
    </TestimonialsSectionStyle>
  )
}
