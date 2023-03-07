import React from 'react'
import ProjectItem from './ProjectItem'
import '../../styles/Project.css'
import { ProjectsList } from '../../helpers/ProjectList';



function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectsList.map((project) => {
          return (
        
            <ProjectItem key={project.id} id={project.id} name={project.name} image={project.image} />
            
            
          );
        })}
      </div>
    </div>
  );
}

export default Projects