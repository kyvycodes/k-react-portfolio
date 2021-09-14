import React from 'react'
import styled from 'styled-components'
import FooterColumn from './FooterColumn'
import ParagraphText from './ParagraphText'

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
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
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .paragraph {
      margin-right: 0;
    }

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
          <h1 className="footer_col1_title">
              I am a footer
          </h1>
          <ParagraphText>
          Gingerbread jelly-o I love jujubes cheesecake liquorice dragée icing toffee. Ice cream shortbread powder I love bonbon. Gingerbread liquorice wafer ice cream I love chocolate chupa chups I love.
          </ParagraphText>
        </div>
        <div className='footer_col2'>
          <FooterColumn
          heading='Important Links'
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
              title:'Projects',
              path:'/projects'
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
            title: 'number',
            path: 'tel:'
          },
          {
            title: 'gmail',
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
      <div className="copyright">
        <div className="container">
          <ParagraphText>
            2021
          </ParagraphText>
        </div>
      </div>
    </FooterStyles>
  )
}
