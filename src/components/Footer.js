import React from 'react'
import styled from 'styled-components'
import FooterColumn from './FooterColumn'
import ParagraphText from './ParagraphText'

const FooterStyles = styled.div`
  padding-top: 1rem;
  background-color: #e6b396;

  .name {
    font-family: 'Ephesis Regular' ;
    font-size: 6rem;
    text-align: left;
  }

  .container {
    display: flex;
    gap: 3rem;
  }
  .footer_col1 {
    flex: 2;
  }
  .footer_col2
  .footer_col3
  .footer_col4 {
    flex: 1;
  }

  .footer_col1_title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 2rem;
    .paragraph {
      margin-right: 0;
    }

  }

  .footer_text {
    font-size: 1.8rem;
    line-height: 1.3em;
  }


  //TODO: refactor gaps
  @media only screen and (max-width: 768px){
    .container {
      flex-direction: column;
      gap: 0.5rem;
      & > div {
        margin-top: 5rem;
      }
    }

    .footer_col1 .paragraph {
      max-width 100;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className='container'>
        <div className='footer_col1'>
          {/* <h1 className="footer_col1_title">
              I am a footer
          </h1> */}
          <h1 className="name">
              Kay Hardeman
          </h1>

         <p className='footer_text'> Open, inventive, engaging, diverse creator ✨
          </p>
        </div>
        <div className='footer_col2'>
          <FooterColumn
          heading='Take a look'
          // #TODO change home link to top of page jump
          links ={[
            {
              type: 'link',
              title: 'Home',
              path:'/',
            },  {
              type:'link',
              title:'About',
              path:'/about'
            },
            {
              type:'link',
              title:'Contact',
              path:'/contact'
            }
          ]}
          />
        </div>
        <div className='footer_col3'>
        <FooterColumn
        heading='Contact Info'
        links={[
          {
            title: 'Gmail',
            path: 'mailto:kyv.hardeman@gmail.com'
          },
          {
            title: 'New York',
            path: 'https://www.google.com/maps/@40.7639214,-73.9691709,13.74z'
          }
        ]}
        />
        </div>
        <div className='footer_col4'>
        <FooterColumn
        heading='Social'
        links={[
              {
                title: "Linkedin",
                path: "https://www.linkedin.com/in/kay-hardeman/"
              }
        ]}
        />
        </div>
      </div>
    </FooterStyles>
  )
}
