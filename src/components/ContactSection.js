import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import ContactForm from './ContactForm'

const ContactSectionStyle =styled.div`
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
        <div className='left_info'></div>
        <div className='right_form'>
          <ContactForm />
        </div>
      </div>
    </ContactSectionStyle>
  )
}
