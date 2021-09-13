import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ProjectImg from '../assets/images/projectImg.png'

const IndividualProjectStyle = styled.div`
.individual_project_img {
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  display: inline-block;
  border: 3px solid var(--gray-2);
  img{
    height: 100%;
  }
}
.individual_project_info {
  margin-top: 1rem;
  background-color: var(--deep-dark);
  padding: 1rem;
  border-radius: 12px;
}
.individual_project_title {
  font-size: 2.2rem;
}
.individual_project_description {
  font-size: 1.6rem;
  font-family: 'RobotoMono Regular';
  marin-top: 1rem;
}
@media only screen and (max-width: 768px) {
  .individual_project_img {
    height: 350px;
  }
}

`

export default function IndividualProject() {
  return (
    <IndividualProjectStyle>
      {/* links to component but can also link to project */}
      <Link to='/projects' className='individual_project_img'>
      <img src={ ProjectImg } alt/>
      </Link>
      <div className="individual_project_info">
        <Link to='/projects'>
          <h3 className='individual_project_title'>Project 1
          </h3>
        </Link>
        <p className='individual_project_description'>Bonbon cotton candy cupcake cake macaroon. Tootsie roll chocolate cake chocolate muffin liquorice dessert wafer gummies.</p>
      </div>
    </IndividualProjectStyle>
  )
}
