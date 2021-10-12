import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterColumnStyle = styled.div`
.heading{
  font-size: 2rem;
  margin-bottom: 1rem;
}
li {
  margin-bottom: 1rem;
}
a {
  font-size; 2.2rem !important; //override font
}

`

export default function FooterColumns({
  heading='Column Heading',
  links = [
    {
    type:'link',
    title:'Home',
    path:'/home'
  },
  {
    type:'link',
    title:'About',
    path:'/about'
  }
]
}) {
  return (
    <FooterColumnStyle>
      <h1 className='heading'>{heading}</h1>
      <ul>
        {
          links.map((item, index) => (
            <li key={index}>
              {/* if the type is a link go to that path */}
              {item.type === "link" ? (
                <Link to={item.path}>{item.title}</Link>
              ) : (
                // if not create an anchor tag
                <a href={item.path} target='_blank' rel='noreferrer'>{item.title}</a>
              )}
            </li>
            ))
        }
      </ul>
      {/* #TODO refactor footer info */}
    </FooterColumnStyle>
  )
}
