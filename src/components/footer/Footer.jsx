import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="mailto:baxnetodev@gmail.com" target='_blank'>
          <EmailIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/baxneto/" target='_blank'>
          <LinkedInIcon />
        </Link>
      </div>
      <p>&copy; 2022 - Baxiclides Basso Neto</p>
    </div>
  );
};

export default Footer;
