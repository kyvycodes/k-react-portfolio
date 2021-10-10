import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Office from '../assets/images/office.jpg'
import NoLink from '../assets/images/nolink.png'

const IndividualProjectStyle = styled.div`
.individual_project_img {
  width: 100%;
  height: 560px;
  overflow: hidden;
  border-radius: 12px;
  display: inline-block;
  box-shadow: 0 0 2em rgb(238, 214, 186);
  img{
    height: 100%;
  }
}
.project_links {
  display: flex;
  gap: 4rem;
  justify-content: space-between;
  margin: 3px;
  margin-bottom: 5px;
}
.project_links button{
  background-color: rgb(238, 214, 186);
  font-size: 1rem;
  border:none;
  padding: 1rem 3rem;
  border-radius: 8px;
  cursor: pointer;
}

.individual_project_info {
  margin-top: 1rem;
  background-color: var(--deep-dark);
  padding: 1rem;
  border-radius: 12px;
}
.individual_project_title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-align: center;
  // font-weight: bold;
  text-transform: uppercase;
}
.individual_project_description {
  font-size: 1.6rem;
  font-family: 'WorkSans Regular';
  marin-top: 1.5rem;
}

@media only screen and (max-width: 768px) {
  .individual_project_img {
    height: 350px;
  }
}

`
// TODO - popup responsiveness when project is highlighted or individual project component
export default function IndividualProject({
  img = Office,
  title = "Coming soon",
  // TODO update
  link = NoLink,
  github= NoLink,
  description = "Come back soon to see what new projects I'm working for.",
  // features = [];
}) {
  return (
    <IndividualProjectStyle>
      {/* links to component but can also link to project */}
      <Link to='/projects' className='individual_project_img'>
      <img src={ img } alt/>
      </Link>
      <div className="individual_project_info">
        <Link to='/projects'>
          <h3 className='individual_project_title'>{title}
          </h3>
        </Link>
        <div className='project_links'>
        <button>
        <a href={link} target='_blank' rel='noreferrer'>VISIT</a>
        </button>
        <button>
        <a href={github} target='_blank' rel='noreferrer'>GITHUB</a>
        </button>
        </div>
        <p className='individual_project_description'>{description}</p>
      </div>
    </IndividualProjectStyle>
  )
}
