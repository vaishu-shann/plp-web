import React from "react";
import ServiceCard from "../../ServiceCard/ServiceCard";
import { ServiceSec, Heading, Subtitle, CardList } from "./service.element";
import { Button } from "../../../globalStyles";

function ServiceComp(props) {
  return (
    <ServiceSec>
      <Heading>Why Us?</Heading>

      <CardList>
        <ServiceCard />
        <ServiceCard  />
        <ServiceCard  />
      </CardList>
    </ServiceSec>
  );
}

export default ServiceComp;
