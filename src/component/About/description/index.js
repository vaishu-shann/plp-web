import React from "react";
import OurTeam from "../Team";
import { AboutDesc, Heading, Subtitle,TeamSection } from "./desc.element";

function DescriptionAbout(props) {
  return (
    <AboutDesc>
      <Heading>We are xyz!</Heading>
      <Subtitle>
        A global software engineering service provider offering Software
        Architecture, Design, Data Engineering, Development, Quality
        Engineering, DevOps, and Support services in domains such as Knowledge
        Engineering, Healthcare Technologies, and FinTech Software using
        technologies such as Artificial Intelligence, Machine Learning, Big
        Data, Data Pipelines, Cloud SaaS, Blockchain, Enterprise Mobility, and
        Analytics. We believe in being polyglot engineers and our core strength
        is to be able to support software product companies from their initial
        start-up stage to being a Fortune 500 company.
        <br />
        <br />
        We build software solutions that are resilient and scalable to the
        changes that any market-leading business would face. We love
        transitioning proof of concepts (POC) into Minimum Viable Product (MVP)
        and then to fully functional software products.
        <br />
        <br />
        We are registered in Mountain View, California, US with offices and
        engineering centers in New Jersey, Munich/EU and Chennai/India. We have
        20 years of Personalized Software Engineering (PSE) Services. We are a
        team of 180+ Software Engineers and we have 30+ clients from different
        parts of the world such as the US, Germany, UK, China, Japan, Australia,
        Hong Kong, Singapore, and Ireland.
      </Subtitle>

      <TeamSection>
        <OurTeam/>
      </TeamSection>
    </AboutDesc>
  );
}

export default DescriptionAbout;
