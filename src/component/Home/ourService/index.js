import React from "react";
import ServiceCard from "../../ServiceCard/ServiceCard";
import { ServiceSec, Heading, Subtitle, CardList } from "./service.element";
import { Button } from "../../../globalStyles";

function ServiceComp(props) {
  return (
    <ServiceSec>
      <Heading>Marketing Agency</Heading>
      <Subtitle>
        Ultra helped me increase my revenue by over 3X in less than 3 months!
      </Subtitle>

      <CardList>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </CardList>

      <Button>Know more</Button>
    </ServiceSec>
  );
}

export default ServiceComp;
