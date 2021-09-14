import React from 'react'
import ParagraphText from './ParagraphText'
import styled from 'styled-components'



export default function AboutInfoItem({
  title="this is the title",
  items=[
    'html',
    'css',
    'js'
  ]
}) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className='items'>
        {
          items.map((item,idx) => (
            <div className='item' key={idx}>
              <ParagraphText>{item}</ParagraphText>
            </div>
          ))
        }
      </div>
    </div>
  )
}
