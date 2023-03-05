import React from 'react'
import ProjectItem from './ProjectItem'
import '../../styles/Project.css'
import { ProjectList } from "../../helpers/ProjectList";


const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projetcts</h1>
      <div className="projectList">
       {ProjectList.map((project)=>{
          return <ProjectItem name={project.name} image={project.img} />
       })}
      </div>
    </div>
  )
}

export default Projects