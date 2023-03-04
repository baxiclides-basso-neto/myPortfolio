import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../../styles/Footer.css'


const Footer = () => {
  return (
    <div className="footer">
      <div>
        <InstagramIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p>&copy; 2022 baxnetodev.com</p>
    </div>
  );
};

export default Footer;
