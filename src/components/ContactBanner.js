import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import ParagraphText from './ParagraphText'

const ContactBannerStyle = styled.div`
  padding: 10rem 0;
  .contact_banner_wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contact_banner_heading {
      font-size: 4rem;
      margin-bottom: 2rem;
  }

  @media only screen and (max-width: 768px){
    .contact_banner_heading {
      font-size: 2.8rem;
    }
  }
`

export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className='container'>
      <div className='contact_banner_wrapper'>
      <ParagraphText>
        Reach out and say Hello
      </ParagraphText>
      <h3 className='contact_banner_heading'>
        Lets work together 💻
      </h3>
      <Button
      btnLink='/contact'
      btnText='CONTACT NOW'
      outline={false}
      />
      </div>
      </div>
    </ContactBannerStyle>
  )
}
