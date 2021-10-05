import React from 'react'
import SectionTitle from './SectionTitle'
import projects from '../assets/data/projects'
import IndividualProject from './IndividualProject';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation])

const ProjectSectionStyle = styled.div`
  padding: 10rem 0;

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

  // swiper arrows
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);

    // Note: Z index only works on positioned elements ( position:absolute , position:relative , or position:fixed
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }

@media screen only and (max-width: 768px){
  .project_all_items {
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;   //centers
    margin-top: 7rem;
    gap: 5rem;
  }
}
`

export default function ProjectSection() {
  return (
    <ProjectSectionStyle>
      <div className='container'>
        <SectionTitle title="Projects" subtitle="Recent work"/>
        <div className='project_all_items'>
          <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={
            {
              // if window width is better than or equal to 640 show one,
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              //as I add more projects
              // 1200: {
              //   slidesPerView: 3,
              // }
            }
          }
          >
            {/* maps imported projects array of objects */}
            {projects.map((project, index) => {
              if(index >= 3) return;
              return (
                // unique key from project data id
                <SwiperSlide key={project.id}>
                  <IndividualProject
                  title={project.name}
                  img={project.img}
                  description={project.desc}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  )
}
