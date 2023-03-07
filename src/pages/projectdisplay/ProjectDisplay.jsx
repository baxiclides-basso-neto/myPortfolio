import React from "react";
import { useParams } from "react-router-dom";
import { ProjectsList } from "../../helpers/ProjectList";
import { GitHub } from "@material-ui/icons/GitHub";
import "../../styles/ProjectsDisplay.css";

export function ProjectDisplayOne() {
  const { id } = useParams();

  const project = ProjectsList.find((p) => p.id === id);

  return (
    <div className="project">
      {project ? (
        <>
          <h1>{project.name}</h1>
          <div>
            <img className="projectImgDisplay" src={project.image} />
            <p>
              <b>Skills:</b> {project.skill}
            </p>
          </div>
          {/* <GitHub /> */}
        </>
      ) : (
        <div>Invalid project ID</div>
      )}
    </div>
  );
}
