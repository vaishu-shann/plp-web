import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./about.element";
import { Link } from "react-router-dom";
import { Container, Button } from "../../../globalStyles";
import HomeImage from "../../../assets/images/svg-1.svg";

function AboutUs(props) {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                {/* <TopLine >{topLine}</TopLine> */}
                <Heading>About Us</Heading>
                <Subtitle>
                  At PLP Data, we are proud to have a team of experienced
                  professionals with deep technical expertise and diverse
                  domains. Our team members have over 7 decades of combined
                  experience in delivering high-quality solutions to clients in
                  a variety of industries, including Banking and Finance,
                  E-commerce, and more.
                </Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig>
                    Get Started
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={HomeImage} alt="" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default AboutUs;
