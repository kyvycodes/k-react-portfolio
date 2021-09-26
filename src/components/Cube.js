import React from 'react'

export default function Cube() {
  return (
    <div>
      <div className="scene">
         <div className="floor"></div>
            <div className="cube" id="cube">
                <div className="front">
                    <p>Front-end</p>
                </div>
            <div className="back">
                  <p>Fullstack</p>
            </div>
            <div className="left">Teacher</div>
            <div className="right">Listener</div>
            <div className="top">
                 <p>Developer</p>
            </div>
            <div className="bottom"></div>
        </div>
      </div>
    </div>
  )
}
