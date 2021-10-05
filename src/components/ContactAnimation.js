import React from 'react'
import styled from 'styled-components'


const ContactAnimationStyle = styled.div`
// .all {
//   text-align: center;
// }

background: #f7f5f2;
// display: flex;
// flex-direction: row;
// height: 100vh;
justify-content: center;
// align-items: center;


.words {
  color: #f7f5f2;
  font-size: 0;
  line-height: 1;
}

.words span {
  font-size: 4rem;
  display: inline-block;
  animation: move 3s ease-in-out infinite;
}

@keyframes move {
  0% {
    transform: translate(-30%, 0);
  }
  50% {
    text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
  }
  100% {
    transform: translate(30%, 0);
  }
}

.words span:nth-child(2) {
  animation-delay: 0.5s;
}

.words span:nth-child(3) {
  animation-delay: 1s;
}

.words span:nth-child(4) {
  animation-delay: 1.5s;
}

.words span:nth-child(5) {
  animation-delay: 2s;
}

.words span:nth-child(6) {
  animation-delay: 2.5s;
}

.words span:nth-child(7) {
  animation-delay: 3s;
}
`

export default function ContactAnimation() {
  return (
    <ContactAnimationStyle >
      <div className='all'>
      <div className="words word-1">
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
        <span></span>
      </div>

      <div className="words word-2">
      <span>M</span>
        <span>E</span>

        </div>
        </div>
    </ContactAnimationStyle >
  )
}
