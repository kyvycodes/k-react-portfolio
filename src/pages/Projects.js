import React from 'react'
import SectionTitle from '../components/SectionTitle'
import styled from 'styled-components'
import MdSearch from 'react-icons/md'


const ProjectsStyles = styled.div`
  padding: 10rem 0;
`

export default function Projects() {
  return (
    <ProjectsStyles>
      <div className='container'>
        <SectionTitle
        title='Projects'
        subtitle='Some of my work'/>
        <div className="projects_search">
          <form>
            <input type='text'>
              <MdSearch />
            </input>
          </form>

        </div>
      </div>
    </ProjectsStyles>
  )
}
