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
                  <Heading >Unlock the Power of Data with Our Comprehensive Data Services</Heading>
                  <Subtitle>In today's data-driven world, having the right data services partner can make all the difference. At PLP Data, we specialize in providing comprehensive data services that help you unlock the full potential of your data. Whether you need data warehousing, data lakes, or a data strategy, we have the expertise and experience to deliver the right solution for your needs.</Subtitle>
                  <Link to='/sign-up'>
                    <Button big fontBig primary >
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