import React, {useState} from 'react'
import SectionTitle from '../components/SectionTitle'
import styled from 'styled-components'
import { MdSearch } from "react-icons/md";
import IndividualProject from '../components/IndividualProject'
import ProjectInfo from '../assets/data/projects'


const ProjectsStyles = styled.div`
  padding: 10rem 0;
`

export default function Projects() {
  const [projectData, setProjectData] = useState(ProjectInfo);

  return (
    <ProjectsStyles >
      <div className='container'>
        <SectionTitle
        title='Projects'
        subtitle='Some of my work'/>

        <div className="projects_search_bar">
          <form>
            <input type='text'/>
              <MdSearch />
          </form>
        </div>

          <div className='projects_all_items'>
            {projectData.map(item => (
                <IndividualProject
                key={item.id}
                title={item.name}
                description={item.desc}
                img={item.img}
                />
            ))}
        </div>
      </div>
    </ProjectsStyles>
  )
}
