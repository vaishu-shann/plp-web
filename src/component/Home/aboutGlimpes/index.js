import React from "react";
import { AboutSec, AboutDescription } from "./aboutGlimpes.element";
import LogoImage from "../../../assets/images/logo-text.png";

function AboutHome(props) {
  return (
    <AboutSec>
        <div className="about-container">
      <img src={LogoImage} alt="" className="gif-img" />
      <AboutDescription>
        <div className="Head-text">our company</div>
        <div className="Title-text">-- years of driving <br/><span style={{color:'rgb(4, 103, 251)'}}>Digital Excellence.</span></div>
        <div className="description">We develop mission-critical business applications by leveraging the power of cutting-edge digital technologies like IoT, RPA, AI, Chatbot, and Cloud to develop business-specific solutions that help enterprises transform their conventional processes impacting their efficiency, productivity and ensure rapid growth, RoI.
</div>
      </AboutDescription>
      </div>
    </AboutSec>
  );
}

export default AboutHome;
