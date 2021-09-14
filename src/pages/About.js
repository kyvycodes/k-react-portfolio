import React from 'react'
import ParagraphText from '../components/ParagraphText'
import Button from '../components/Button'
import AboutImg from '../assets/images/kyvz-avatar.png'
import styled from 'styled-components'
import AboutInfoItem from '../components/AboutInfoItem'
import ContactBanner from'../components/ContactBanner'
import resume from '../assets/public/Kay_Hardeman.pdf'

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
  // .right img {
  //   width: 400px;
  //   height: 400px;
  // }
  .right {
    img {
      border-radius: 50%;
     border: 4px solid var(--gray-1);
    }
  }
  .about_subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about_info {
    margin-bottom: 4rem;
    .paragraph {
      max-width: 100%;
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
           <p className='about_subheading'>
              Hi, I am <span>Kay Hardeman</span>
              </p>
                <h2 className='about_heading'>A blah blah blah</h2>
                  <div className='about_info'>
                    <ParagraphText>
                     Oat cake lollipop wafer cake shortbread. Oat cake pudding cake candy wafer topping. Sweet ice cream liquorice halvah sugar plum apple pie pie jujubes. Cake chocolate bar lemon drops pie marshmallow marzipan apple pie icing.
                     <br/> <br/>
                      Bonbon danish carrot cake powder ice cream. Sesame snaps chocolate cake jujubes biscuit sweet dessert cake. Chupa chups danish sweet roll donut powder pudding. Tootsie roll chocolate bar dessert shortbread caramels shortbread jelly-o gummi bears macaroon. Cupcake chocolate cake jelly fruitcake marzipan cookie soufflé pastry icing.
                      <br/> <br/>
                      Dessert chupa chups wafer tiramisu chocolate cake bonbon cake. Gingerbread donut caramels sesame snaps oat cake liquorice dragée liquorice pie. Sweet lemon drops wafer biscuit candy canes sesame snaps. Topping pastry bonbon chocolate cake jujubes. Marzipan topping danish sesame snaps wafer cookie dragée dragée.
                    </ParagraphText>
                 </div>
                {/* <Button btnText='Download Resume' btnLink='#' outline={false} to={resume}  target="_blank" download /> */}

                {/* #TODO - download button or style download  */}
                <a href={resume} download="Kay_Hardeman.pdf"> Download Here </a>

              </div>
              <div className='right'>
                <img src={AboutImg} alt="Bio Picture"/>
          </div>
         </div>
         <div className='about_info_items'>
            <div className='about_info_item'>
              <h1 className='about_info_heading'>My Skills</h1>
              <AboutInfoItem
              title="front end"
              // items={[
              //   "Fullstack", "Knowledge House"
              // ]}
              />
              <AboutInfoItem
              title="back end"
              items={[
                "Fullstack", "Knowledge House"
              ]}
              />
            </div>
            <div className='about_info_item'>
              <h1 className='about_info_heading'>Coding Education</h1>
              <AboutInfoItem
              title="High-School"
              items={[
                "Fullstack", "Knowledge House"
              ]}
              />
              <AboutInfoItem
              title="Coding Bootcamp"
              items={[
                "Fullstack", "Knowledge House"
              ]}
              />
            </div>
            <div className='about_info_item'>
              <h1 className='about_info_heading'>Volunteer Work</h1>
              <AboutInfoItem
              title="High-School"
              items={[
                "Fullstack", "Knowledge House"
              ]}
              />
              <AboutInfoItem
              title="Coding Bootcamp"
              items={[
                "Fullstack", "Knowledge House"
              ]}
              />
            </div>
         </div>
       </div>
       <ContactBanner/>
    </AboutPageStyle>
  )
}
