import React from 'react'
import { MdEmail } from 'react-icons/md'
import { BiHappyBeaming } from 'react-icons/bi'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import ContactForm from './ContactForm'
// import ContactInfoItem from './ContactInfoItem'

const ContactSectionStyle = styled.div`
padding: 10rem 0;

.contact_section_wrapper::after,
.contact_section_wrapper::before {
  position: absolute;
  content: '';
  width: 4px;
  height: 60%;
  background-color: #e6afb5;
  top: 75%;
  transform: translate(-50%, -50%);
}

.contact_section_wrapper::after {
  left: 20%;
}
.contact_section_wrapper::before{
  right: 20%;
}



@media only screen and (max-width: 768px){
.contact_section_wrapper{
  flex-direction: column;
}
.contact_section_wrapper::after {
  display: none;
}
.left_info,
.right_form {
  max-width: 100%;
  }
.right_form {
    padding: 4rem 2rem 2rem 2rem;
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
        {/* <div className='left_info'>
          <ContactInfoItem
            icon = { < BiHappyBeaming />}
            text = 'Hey ! Please feel free to reach out to me if you want to schedule a meeting, etc etc '
          />
          <ContactInfoItem
            icon = { < MdEmail /> }
            text = 'This is some info'/>
          <ContactInfoItem
            text = 'New York'/>
        </div>
        <div className='right_form'> */}
          <ContactForm />
          </div>
        </div>
      {/* </div> */}
    </ContactSectionStyle>
  )
}
