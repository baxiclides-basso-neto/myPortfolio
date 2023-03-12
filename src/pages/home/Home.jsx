import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Olá, meu nome é Baxiclides Neto,</h2>
        <div className="prompt">
          <p>Sou um desenvolvedor web apaixonado por aprender e criar novas soluções, sempre em busca de expandir meus conhecimentos.</p>
          <Link to="mailto:baxnetodev@gmail.com" target="_blank">
            <EmailIcon />
          </Link>
          <Link to="https://www.linkedin.com/in/baxneto/" target="_blank">
            <LinkedInIcon />
          </Link>
          <Link to= "https://github.com/baxiclides-basso-neto" target="_blank">
            <GithubIcon />
          </Link>
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
