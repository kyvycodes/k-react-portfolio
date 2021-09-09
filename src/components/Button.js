import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

export default function Button(props) {
  console.log('btn', props)
  return (
    <div>
      <BrowserRouter>
        <Link className='button' to={props.btnLink}>{props.btnText}</Link>
      </BrowserRouter>
    </div>
  )
}
