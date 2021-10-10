import React from 'react'
import styled from 'styled-components'

// BUG resizing

const CubeAnimation = styled.div`

min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
    // overflow: hidden;
font-size: 75px;
perspective: 10em;
perspective-origin: 50% calc(50% - 2em);


p {

// text-align: center;
font-size: 25px;
color: white;
}

.cube_text {
  text-align: center;
  top: -10px;
}

.scene {
  position: relative;
  transform-style: preserve-3d;
  animation: sceneRotate 30s infinite linear;

  @keyframes sceneRotate {
      to { transform: rotateY(360deg);}
  }
}
.cube {
  position: absolute;
  width: 2.2em;
  height: 2.2em;
  bottom: -1.1em;
  left: -1.1em;
  transform-style: preserve-3d;
  animation: cubeHeight var(--bounceSpeed) infinite ease-out;

  @keyframes cubeHeight {
      0%, 100% { height: 1.1em;}
      8%, 93.5% { height: 2.2em;}
  }

  .left, .right, .front, .back {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #e9bcc1;
      box-shadow: 0 0 0.9em #e6afb5 inset;
  }
  .front{ transform: translateZ(1.1em);}
  .right{ transform: rotateY(90deg) translateZ(1.1em);}
  .back{ transform: rotateY(180deg) translateZ(1.1em);}
  .left{ transform: rotateY(270deg) translateZ(1.1em);}

  .top{
      position: absolute;
      width: 2.2em;
      height: 2.2em;
      background:#e9bcc1;
      box-shadow: 0 0 1em #e6afb5  inset;
      transform: translateY(-50%) rotateX(90deg);
  }

  .bottom{
      position: absolute;
      width: 2.2em;
      height: 2.2em;
      background: #e9bcc1;
      box-shadow: 0 0 1em #e6afb5 ;
      bottom: 0;
      transform: translateY(50%) rotateX(90deg);
  }
}
`

export default function Cube() {
  return (
    <CubeAnimation>
      <div className="scene">
            <div className="cube">
              <div className='cube_text'>
                <div className="front">
                  <br/>
                    <p>Front-end</p>
                </div>
            <div className="back">
               <br/>
                  <p>Fullstack</p>
            </div>
            <div className="left">
              <p>Mentor</p>
              </div>
            <div className="right">
              <p>Developer</p>
              </div>
            <div className="top"></div>
            <div className="bottom"></div>
            </div>
        </div>
      </div>
    </CubeAnimation>
  )
}
