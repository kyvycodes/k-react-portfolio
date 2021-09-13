import React from 'react'
import SectionTitle from './SectionTitle'
import { Swiper } from "swiper/react";
import projects from '../assets/data/projects'
import IndividualProject from './IndividualProject';
import styled from 'styled-components';

const ProjectSectionStyle = styled.div`
padding: 10rem 0;
// background-color: red;
// .container

.project_all_items {
  display: flex;
  gap: 3rem;
  margin-top: 5rem;
}
// inspect, highlight div - classes that are available with swiper
.swiper-container {
  padding-top: 8rem;
  max-width: 100%;
}
`

export default function ProjectSection() {
  return (
    <ProjectSectionStyle>
      <div className='container'>
        <SectionTitle title="Projects" subtitle="Some of my recent work"/>
        <div className='project_all_items'>
          <Swiper>
            {projects.map((project, index) => {
              if(index >= 3) return;
              return <IndividualProject/>
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  )
}
