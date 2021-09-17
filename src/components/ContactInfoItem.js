import React from 'react'
import { MdPlace } from 'react-icons/md'
import ParagraphText from '../components/ParagraphText'

const ItemStyles = styled.div`
padding: 2rem;
background-color: var(--deep-dark);
display: flex;
align-items: center;
gap: 2rem;
border-radius: 8px;
margin-bottom: 2rem;
.icon {
  color: var(--white);
  background-color: var(--gray-2);
  padding: 1.3rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
svg {
  width: 3.5rem;
}
`

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'This is some info'
}) {
  return (
    <div>
      <div className='icon'>{icon}</div>
      <div className='info'>
        <ParagraphText>{text}</ParagraphText>
      </div>
    </div>
  )
}
