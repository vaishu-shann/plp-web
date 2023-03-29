import React from 'react';
import HomeImage from "../../../assets/images/svg-1.svg"
import { Link } from 'react-router-dom';
import { Container, Button } from '../../../globalStyles';
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
  } from './Info.element';

function HomeBanner(props) {
    return (
        <>
        <InfoSec>
          <Container>
            <InfoRow>
              <InfoColumn>
                <TextWrapper>
                  {/* <TopLine >{topLine}</TopLine> */}
                  <Heading >Marketing Agency</Heading>
                  <Subtitle>Lead Generation Specialist for Online Businesses Generation Specialist for Online Businesses Lead  Specialist for Online Businesses</Subtitle>
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

export default HomeBanner;