import React, {useState, useEffect} from 'react'
import SectionTitle from '../components/SectionTitle'
import styled from 'styled-components'
import { MdSearch } from "react-icons/md";
import IndividualProject from '../components/IndividualProject'
import ProjectInfo from '../assets/data/projects'


 // repeat() function allows you to repeat columns as many times as needed.
    // auto-fill FILLS the row with as many columns as it can fit.
    // minmax() specifies a minimum width for the column
const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects_all_items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects_search_bar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects_search_bar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects_search_bar .search_icon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects_search_bar .search_icon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px){
    .projects_search_bar,
    .projects_search_bar form,
    .projects_search_bar input {
      width: 100%;
    }
  }
`

export default function Projects() {
  //
  const [searchText, setSearchText] = useState('')
  const [projectData, setProjectData] = useState(ProjectInfo);
  //
  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() => (
      ProjectInfo.filter(item => (
        item.name.toLowerCase().match(searchText.toLowerCase())
      ))
    ))

  }, [searchText]);

  function handleChange(e){
    e.preventDefault();
    setSearchText(e.target.value); //value from form
    if (!e.target.value.length > 0){
      setProjectData(ProjectInfo)
    }
  }
  return (
    <ProjectsStyles >
      <div className='container'>
        <SectionTitle
        title='Projects'
        subtitle='Some of my work'/>

        <div className="projects_search_bar">
          <form>
            <input
            type='text'
            value={searchText}
            onChange={handleChange}
            placeholder="Project Name"
            />
              <MdSearch className="search_icon"/>
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
