import React, {useRef, useEffect, useState, memo} from 'react';
import ReactDOM from 'react-router-dom';
import styled from 'styled-components';
// import React from

const ConfettiStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .particles {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;

    .particle {
      position: absolute;
      transition: all 5s ease-out;

      &.circular {
        background-color: var(--color);
        width: var(--size);
        height: var(--size);
        border-radius: var(--size);
        transform: translate(var(--x), var(--y));
      }

      &.rectangular {
        background-color: var(--color);
        width: var(--size);
        height: var(--size);
        transform:
          translate(var(--x), var(--y))
          rotateX(var(--rotate))
          rotateY(var(--rotate));
      }

      &.squiggle {
        stroke: var(--color);
        stroke-width: 15px;
        stroke-linecap: round;
        overflow: visible;
        width: var(--size);
        height: var(--size);
        transform:
          translate(var(--x), var(--y))
          rotateY(var(--rotate));
      }
    }
  }

  // .button {
  //   height: 40px;
  //   width: 200px;
  //   font-family: Roboto;
  //   background-color: #34495e;
  //   color: white;
  //   border-radius: 4px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   cursor: pointer;
  //   transition: all .2s ease-out;
  //   user-select: none;



    .popper {
      margin-right: 20px;
      margin-left: -20px;
      width: 64px;
      height: 64px;
      background-image: url('../assets/images/confetti.png');
    }
  }



`



const COLORS = ['#e6afb5','#87685a','#d8af95','#271d1d','#e6b396', '#c18088', '#534344'];
const TOP_OFFSET = window.innerHeight;
const LEFT_OFFSET = 150;

const randomNumber = (min, max) => min + Math.floor(Math.random()*(max - min));

const randomColor = () => COLORS[randomNumber(0,COLORS.length)];

const Particle = ({children, size}) => {
  const ref = useRef();
  const child = React.Children.only(children);
  const top = randomNumber(-200, -size[1]);

  useEffect(() => {
    ref.current.style.setProperty('--x', `${randomNumber(-LEFT_OFFSET, LEFT_OFFSET)}px`);
    ref.current.style.setProperty('--y', `${window.innerHeight - top + randomNumber(0, 300)}px`);
    ref.current.style.setProperty('--rotate', `${randomNumber(200, 3000)}deg`);
  }, []);

  return React.cloneElement(child, {ref, style: {
    '--color': randomColor(),
    '--size': `${randomNumber(...size)}px`,
    '--rotate': '0deg',
    '--x': '0px',
    '--y': '0px',
    top: top,
    left: randomNumber(0, window.innerWidth),
  }});
};



const CircularParticle = () => (
  <Particle size={[5, 10]}>
    <div className='particle circular'/>
  </Particle>
);

const RectangularParticle = () => (
  <Particle size={[5, 10]}>
    <div className='particle rectangular'/>
  </Particle>
);

const SquiggleParticle = () => (
  <Particle size={[15, 45]}>
    <svg className='particle squiggle'
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 200">
      <path d="M15 0 Q 30 25 15 50 Q 0 75 15 100 Q 30 125 15 150 Q 0 175 15 200"/>
    </svg>
  </Particle>
);

const Particles = memo(({count: n}) => {

  const particles = [];
  const types = [SquiggleParticle, RectangularParticle, CircularParticle];

  while(n--) {
    const Particle = types[randomNumber(0, 3)];
    particles.push(
      <Particle key={n}/>
    );
  }

  return (
    <div className='particles'>
      {particles}
    </div>
  );
});

let id = 1;

//  {
//   return (
//     <ConfettiStyle>

//     </ConfettiStyle>
//   )
// }


export default function Confetti() {
  const [particles, setParticles] = useState([]);
  const {innerWidth} = window;

  const handleOnClick = () => {
    const _id = id;
    id++;

    setParticles(particles => [...particles, _id]);
    setTimeout(() => {
      // Cleanup
      setParticles(particles => particles.filter(id => id !== _id));
    }, 5000);
  }

  return (
    <ConfettiStyle>
    <div className='app'>
      {particles.map(id => (
        <Particles key={id} count={Math.floor(innerWidth / 10)}/>
      ))}
      <div className='button' onClick={handleOnClick}>
        <div className='popper'/>
        CLICK ME!</div>
    </div>
    </ConfettiStyle>
  );




      }
