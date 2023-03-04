import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Baxiclides Neto</h2>
        <div className="prompt">
          <p>I am a web developer with a passion for learning and creating,</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HMTL, CSS, StyledComponents, TAilwindCSS, MterialUI, NPM,
              YARN, Git, GitHub, Figma{" "}
            </span>
            <h2>Languages</h2>
            <span>JavaScript and TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
