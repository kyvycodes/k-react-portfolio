import React from 'react'
import { MdPlace } from 'react-icons/md'

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'This is some info'
}) {
  return (
    <div>
      <div className='icon'>{icon}</div>
      <div className='info'>

      </div>
    </div>
  )
}
