import React from 'react'
import styled from 'styled-components'

const ParagraphStyle = styled.div`
max-width: 500px;
margin: 0 auto;
font-size: 1.8rem;
line-height: 1.3rem;
@media only screen and (max-width: 768px) {
  font-size: 1.4rem;

}
`

export default function ParagraphText(props) {
  // can also - destructor children from props
  // ex:
  // export default function ParagraphText({children}) - <p>{children}</p>
  console.log(props)
  console.log(props.children)
  return (
    <ParagraphStyle>
      <p>{props.children}</p>
    </ParagraphStyle>
  )
}
