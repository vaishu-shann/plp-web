import React from 'react';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './about.element';
  import { Link } from 'react-router-dom';
import { Container, Button } from '../../../globalStyles';
import HomeImage from "../../../assets/images/svg-1.svg"


function AboutUs(props) {
    return (
        <>
        <InfoSec>
          <Container>
            <InfoRow>
              <InfoColumn>
                <TextWrapper>
                  {/* <TopLine >{topLine}</TopLine> */}
                  <Heading >About Page</Heading>
                  <Subtitle>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Subtitle>
                  <Link to='/sign-up'>
                    <Button big fontBig >
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