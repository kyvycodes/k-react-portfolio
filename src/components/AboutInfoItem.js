import React from 'react'
import ParagraphText from './ParagraphText'
import styled from 'styled-components'


const AboutInfoItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-top: 3rem;
  position: relative;

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
  .about_info_items {
    margin-top: 15rem;
  }

  @media only screen and (max-width: 768px){
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`
export default function AboutInfoItem({
  title = "title",
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
