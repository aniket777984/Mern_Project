import React from "react";
import playStore from "../../images/playstore.png";
import appStore from "../../images/Appstore.png";
import "./Footer.css";
import { Instagram, Facebook, YouTube } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1>TRAVELPAD</h1>
        <p>High Quality is our first Priority</p>
        <p>Copyrights 2021 &copy; Aniket Kumar</p>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div className="rightFooter">
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/meabhisingh/" target="black">
          <Instagram />
        </a>
        <a href="https://youtube.com/6packprogrammer/" target="black">
          <YouTube />
        </a>
        <a href="https://instagram.com/meabhisingh/" target="black">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/in/meabhisingh/" target="black">
          <Instagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
