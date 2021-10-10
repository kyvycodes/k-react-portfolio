import React from 'react'

import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import ContactForm from './ContactForm'
// import ContactInfoItem from './ContactInfoItem'

const ContactSectionStyle = styled.div`
padding: 10rem 0;
background-color: #FFFFFF;

// BUG footer off ipad pro
 @media only screen and (max-width: 1050px){
  .contact_section_wrapper::after,
  .contact_section_wrapper::before {
    display: none;
  }
 }

@media only screen and (max-width: 768px){
  .contact_section_wrapper::after,
  .contact_section_wrapper::before {
    display: none;
  }
}


`

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className='container'>
        <SectionTitle
        subtitle=''
        title='Get In Touch ✉️'
        />
        <div>
          <ContactForm />
          </div>
        </div>
    </ContactSectionStyle>
  )
}
