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
        <div className="Title-text">At PLP Data</div>
        <div className="description">We are committed to providing high-quality solutions to our clients. Our team of experienced professionals are dedicated to delivering solutions that meet our clients' needs and exceed their expectations. Here are some reasons why you should choose us: 
<ul>
  <li>Over 7 decades of combined 	experience - Leadership Team</li>
  <li>Deep technical expertise in 	various technologies and domains</li>
  <li>Proven track record of delivering 	successful solutions</li>
  <li>Focus on critical thinking, design 	thinking, and customer needs</li>
  <li>Commitment to quality, security, and customer satisfaction</li>
</ul>



</div>
      </AboutDescription>
      </div>
    </AboutSec>
  );
}


export default AboutHome;
