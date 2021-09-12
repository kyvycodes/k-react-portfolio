import React from 'react'
import SectionTitle from './SectionTitle'
import { Swiper } from "swiper/react";
import projects from '../assets/data/projects'
import IndividualProject from './IndividualProject';

export default function ProjectSection() {
  return (
    <div>
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
    </div>
  )
}
