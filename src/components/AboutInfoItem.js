import React from 'react'
import ParagraphText from './ParagraphText'
import styled from 'styled-components'


const AboutInfoItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 3rem;


  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18em;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

`
export default function AboutInfoItem({
  title = "this is the title",
  items = [
    'html',
    'css',
    'js'
  ]
}) {
  return (
    <AboutInfoItemStyle>
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
    </AboutInfoItemStyle>
  )
}
