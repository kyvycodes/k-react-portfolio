import React from 'react'
import FooterColumns from './FooterColumns'
import ParagraphText from './ParagraphText'

export default function Footer() {
  return (
    <div>
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
    </div>
  )
}
