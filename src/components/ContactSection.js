import React from 'react'

import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import ContactForm from './ContactForm'
// import ContactInfoItem from './ContactInfoItem'

const ContactSectionStyle = styled.div`
padding: 10rem 0;

.contact_section_wrapper::after {
  position: absolute;
  content: '';
  width: 2.5px;
  height: 40%;
  background-color: #e6afb5;
  left: 20%;
  top: 75%;
  transform: translate(-50%, -50%);
}
.contact_section_wrapper::before {
  position: absolute;
  content: '';
  width: 2.5px;
  background-color: #e6afb5;
  height: 40%;
  right: 20%;
  top: 75%;
  transform: translate(-50%, -50%);
}

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
        <div className='contact_section_wrapper'>
          <ContactForm />
          </div>
        </div>
    </ContactSectionStyle>
  )
}
