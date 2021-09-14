import React from 'react'
import ParagraphText from '../components/ParagraphText'
import Button from '../components/Button'
import AboutImg from '../assets/images/kyvz-avatar.png'
import styled from 'styled-components'

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
  .right img {
    width: 400px;
    height: 400px;
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
                <Button btnText='Download Resume' btnLink='#' outline={false}/>
              </div>
              <div className='right'>
                <img src={AboutImg} alt="Bio Picture"/>
          </div>
         </div>
       </div>
    </AboutPageStyle>
  )
}
