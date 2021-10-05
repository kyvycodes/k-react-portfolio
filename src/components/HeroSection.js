import React from 'react'
import DoorImg from '../assets/images/door.jpg'
import Button from './Button'
import ParagraphText from './ParagraphText'
import styled from 'styled-components'
import Interests from '../assets/images/interests-arrow.svg'
import ScrollDown from '../assets/images/scroll-down-arrow.svg'

const HeroStyles = styled.div`
font-family: 'Poppins', sans-serif;

.hero_section{
  height: 100vh;
  min-height: 1000px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;   //so that child can be absolute

}
.hero_heading {
  font-size: 4rem;
  font-family: 'Ephesis Regular';
  margin-bottom: -45rem;
  position: relative;
  color: white;
}

.door_img {
  width: 100%;
  height: 100%;
}

.hero_info {
  margin-top: -45rem;


  // font-size: 20rem;
}

.hero_interests,
.hero_scroll_down {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  bottom: 20px;
  width: 50px;
}

.hero_interests {
  left: 50px;
}
.hero_scroll_down {
  right: 50px;
}

.hero_interests_indicator,
.hero_scroll_down {
  width: 50px;
  p {
    font-size: 1.6rem;
    transform: translateY(-70px) rotate(90deg); //rotates text
    letter-spacing: .7rem; //increases visibility
    text-transform: uppercase;
  }
  img{
    max-height: 45px;
    width: 16px;
    margin: 0 auto;
    object-fit: contain;
    color: #e6b396
  }
}
.hero_scroll_down {
//   p {
//     transform: translateY(-70px) rotate(90deg); //rotates text
//  }
    img {
    max-height: 70px;

  }
}

.hero_interests_text {
  ul {
    li {
      margin-bottom: 1rem;
    }
    a {
      display: inline-block;
      font: 1.4rem;
      transform: rotate(-90deg);
      // letter-spacing: 5px;
      margin-bottom: 1.5rem;
    }
  }
}

@media only screen and (max-width: 768px) {
  .hero_section {
    min-height: 750px;
  }
  .hero_heading {
    font-size: 1.4rem;
    margin-bottom: -2.5rem;
    .hero_name {
      // font-size: 5.5rem;
      font-size: 4.5rem;
    }
  }
  .door_img {
    height: 420px;
  }

  //TODO refactor css for media
  .hero_info {
    margin-top: 3rem;
    // margin-bottom: -5rem;
  }
  //left side
  .hero_interests {
    left: 0px;
    bottom: -15%;
    width: 20px;
    .hero_interests_indicator {
      width: 20px;
      gap: 5rem;
      p {
        font-size: 1.1rem;
        padding-right: 10px;
      }
      img {
        max-height: 42px;
      }
    }
  .hero_interests_text {
    ul {
      li{
        a {
          font: 1.2rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
}
  //right side
  .hero_scroll_down {
    width: 20px;
    right: 0;
    gap: 1rem;
    p {
      font-size: 1.1rem;
    }
  }
}

`


export default function HeroSection() {
  return (
    <HeroStyles>
      <div className='hero_section'>
      <div className='container'>
        <div className='hero_heading'>
        <p>Open, inventive, excited, diverse, creator. Welcome to my page ✨ </p>
        <Button btnLink ='/projects' btnText='View My Work 🌸' outline={false}/>
          {/* props created by me: btnLink, btnText, outline - can be named whatever and can have multiple datatypes */}
          </div>
          <div className="door_img">
            <img src={DoorImg} alt=''/>
          </div>
      <div className='hero_interests'>
          <div className='hero_interests_indicator'>
            <p>follow</p>
            <img src={ScrollDown} alt=''/>
            </div>
            <div className='hero_interests_text'>
          </div>
      </div>
      {/* take a look around  */}
      <div className="hero_scroll_down">
      <p>scroll</p>
      <img src={ScrollDown} alt=''/>
      </div>
    </div>
  </div>
  </HeroStyles>
  )
}
