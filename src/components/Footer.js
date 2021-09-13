import React from 'react'
import styled from 'styled-components'
import FooterColumns from './FooterColumns'
import ParagraphText from './ParagraphText'

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer_col1 {
    flex: 2;
  }
  .footer_col2
  .footer_col3
  .footer_col4 {
    flex: 1;
  }

  .footer_col1_title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className='container'>
        <div className='footer_col1'>
          <h1 className="footer_col1_title">
              I am a footer
          </h1>
          <ParagraphText>
          Gingerbread jelly-o I love jujubes cheesecake liquorice dragée icing toffee. Ice cream shortbread powder I love bonbon. Gingerbread liquorice wafer ice cream I love chocolate chupa chups I love.
          </ParagraphText>
        </div>
        <div className='footer_col2'>
          <FooterColumns/>
        </div>
        <div className='footer_col3'>
        <FooterColumns/>
        </div>
        <div className='footer_col4'>
        <FooterColumns/>
        </div>
      </div>
    </FooterStyles>
  )
}
