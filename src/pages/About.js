import React from 'react'
import ParagraphText from '../components/ParagraphText'
import Button from '../components/Button'
import AboutImg from '../assets/images/kyvz-avatar.png'
// import Cube from '../components/Cube'
import styled from 'styled-components'
import AboutInfoItem from '../components/AboutInfoItem'
import ContactBanner from'../components/ContactBanner'
import resume from '../assets/public/Kay_Hardeman.pdf'
import DocumentDownload from '../components/DocumentDownload'

const AboutPageStyle = styled.div`

  padding: 20rem 0 10rem 0;
  .top_section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .right {
    img {
    border-radius: 50%;
    box-shadow: 0 0 1em #e6b396;
    }
  }
  .about_subheading {
    margin-bottom: 3rem;
    font-family: 'Ephesis Regular';
    font-size: 4rem;
    color: #111111;
  }
  .about_heading {
    font-size: 4.4rem;
    margin-bottom: 3rem;
    // text-shadow: -.5px 0 #111111, 0 .5px #111111, .5px 0 #111111, 0 -.5px #111111;
    color: #d8af95;
    text-transform: uppercase;
  }
  .about_info {
    margin-bottom: 4rem;
    .paragraph {
      max-width: 100%;
      color: #111111;
    }
  }

  .about_info_items {
    margin-top: 15rem;
  }
  .about_info_item {
    margin-bottom: 10rem;
  }
  .about_info_heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px){
    padding: 10rem 0;

    .top_section {
      flex-direction: column;
      gap: 5rem;
    }
    .about_info_heading {
      font-size: 3rem;
    }
    .about_subheading {
      font-size: 1.8rem;
    }
    .about_heading {
      font-size: 2.8rem;
    }

  }
`

export default function About() {
  return (
    <AboutPageStyle>
      <div className='container'>
        <div className='top_section'>
          <div className='left'>
                <h2 className='about_heading'>Software Engineer</h2>
                <p className='about_subheading'><strong>
              Hi, there ! </strong>
              </p>
                  <div className='about_info'>
                    <ParagraphText>
                    “Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.”
                   {/*  */}
                     <br/> <br/>
                     - Marie Curie, Two-Time Nobel Prize Winner
                   {/*  */}
                      <br/> <br/>
                    </ParagraphText>
                 </div>
                <DocumentDownload/>
              </div>
              <div className='right'>
                <img src={AboutImg} alt="Bio Picture"/>
                {/* <Cube /> */}
          </div>
         </div>
         <div className='about_info_items'>
            <div className='about_info_item'>
              <h1 className='about_info_heading'>My Skills</h1>

              <AboutInfoItem
              title="Proficient:"
              items={[
                "JavaScript", 'Express', 'Git', 'Node.js', 'React', 'CSS', 'HTML'
              ]}
              />
                <AboutInfoItem
              title="Comfortable:"
              items={[
                "Material-UI", "Redux ", "Mocha", 'Sequelize', 'SQL', 'PostgreSQL'
              ]}
              />
              <AboutInfoItem
              title="Familiar:"
              items={[
                'Heroku', 'Netflify', 'Jasmine', 'TDD (Mocha, Chai, Jasmine)'
              ]}
              />
            </div>
            <div className='about_info_item'>
              <h1 className='about_info_heading'>Coding Education</h1>
              {/* <AboutInfoItem
              title="High-School"
              items={[
                "Fullstack", "Knowledge House"
              ]}
              /> */}
              <AboutInfoItem
              title=""
              items={[
                "Fullstack Academy", "Project Code vol. 2", "Project Code vol. 1"
              ]}
              />
            </div>
            <div className='about_info_item'>
              <h1 className='about_info_heading'>Volunteer Work</h1>
              <AboutInfoItem
              title="2020 - 2021"
              items={[
                "Code Nation"
              ]}
              />
              <AboutInfoItem
              title="2021"
              items={[
                "Black Is Tech Virtual Conference"
              ]}
              />
            </div>
         </div>
       </div>
       <ContactBanner/>
    </AboutPageStyle>
  )
}
