import React from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import SectionTitle from './SectionTitle'
import ParagraphText from './ParagraphText'
import styled from 'styled-components'


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
  font-family: 'Montserrat Bold':
  font-size: 2.2rem;
}
.testimonial_title {
  font-size: 1.6rem;
  margin-top: 0.3rem;
}

`

// .container




export default function TestimonialsSection() {
  return (
    <TestimonialsSectionStyle>
      <div className='container'>
      <SectionTitle
      subtitle='This is a test'
      title='this is testimonials'/>
      <div className='testimonial_wrapper'>
      <SwitchTransition>
        <CSSTransition>
          <div className='testimonial_info'>
            <div className='testimonial_description'>
                <ParagraphText>
                Sugar plum chupa chups jelly-o apple pie gummies oat cake caramels. Pastry oat cake jelly-o cheesecake brownie.
                </ParagraphText>
                <h2 className='testimonial_name'>
                  John Doe
                </h2>
                <p className='testimonial_title'>
                  Web Developer
                </p>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
      </div>
      </div>
    </TestimonialsSectionStyle>
  )
}
