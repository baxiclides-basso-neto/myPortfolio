import React from "react";
import { useParams } from "react-router-dom";
import { ProjectsList } from "../../helpers/ProjectList";
import { Link } from "react-router-dom";

import GitHubIcon from "@material-ui/icons/GitHub";
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
            <Link to={project.vercelUrl}>
              <img className="projectImgDisplay" src={project.image} />
            </Link>
            <p>
              <b>Skills:</b> {project.skill}
            </p>
          </div>
          <Link to={project.githubUrl} target="blank">
            <GitHubIcon className="gitHubIcon" />
          </Link>
        </>
      ) : (
        <div>Invalid project ID</div>
      )}
    </div>
  );
}
