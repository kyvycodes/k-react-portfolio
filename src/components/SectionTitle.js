import React from 'react'
import styled from 'styled-components'

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: "WorkSans Regular";
    font-size: 1.5rem;
  }
  h2 {
    font-family: 'Poppins SemiBold';
    font-size: 6rem;
    text-transform: uppercase;
    color: #111
  }
  .sub {
    color: #87685a;
  }

  @media only screen and (max-width: 768px){
    p{
      font-size:  1.2rem;
    }
    h2{
      font-size: 3.6rem;
    }
  }

`;

export default function SectionTitle({
  subtitle = 'This is a subtitle',
  title = 'This is the Title'
}) {
  return (
    <SectionTitleStyle >
      <p className='sub'>{subtitle} </p>
      <h2>{title} </h2>
    </SectionTitleStyle>
  )
}
