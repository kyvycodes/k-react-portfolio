import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


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
  },
  {
    type:'link',
    title:'Projects',
    path:'/project'
  },
  {
    type:'link',
    title:'Contact',
    path:'/contact'
  }
]
}) {
  return (
    <div>
      <h1 className='heading'>{heading}</h1>
      <ul>
        {
          links.map((item, index) => (
            <li key={index}>
              {/* if the type is a link go to that path */}
              {item.type ==="link" ? (
                <Link to={item.path}>{item.title}</Link>
              ) : (
                // if not create an anchor tag
                <a href={item.path} target='_blank' rel='noreferrer'></a>
              )}
              {/*target='_blank' because it is an external like, leak no referrer information */}
            </li>
            ))
        }
      </ul>
    </div>
  )
}
