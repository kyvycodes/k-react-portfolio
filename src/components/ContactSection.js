import React from 'react'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import ContactForm from './ContactForm'
import ContactInfoItem from './ContactInfoItem'

const ContactSectionStyle = styled.div`
padding: 10rem 0;

`

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className='container'>
        <SectionTitle
        subtitle='Contact'
        title='Get In Touch'
        />
        <div className='contact_section_wrapper'></div>
        <div className='left_info'>
          <ContactInfoItem
            icon = { < MdLocalPhone /> }
            text = '123-456-7890'
          />
          <ContactInfoItem
            // icon = { MdEmail }
            icon = { < MdEmail /> }
            text = 'This is some info'/>
          <ContactInfoItem
            text = 'New York'/>
        </div>
        <div className='right_form'>
          <ContactForm />
        </div>
      </div>
    </ContactSectionStyle>
  )
}
