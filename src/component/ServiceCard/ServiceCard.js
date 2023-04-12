import React from "react";
import { Card, Heading, Subtitle } from "./serviceCard.element";

function ServiceCard(props) {
  return (
    <Card>
        <img src="https://live-syms.pantheonsite.io/wp-content/uploads/2020/10/cloud-storage-uploading-option.png" alt="" className="icon"/>
        <div>
      <Heading>Design thinking</Heading>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum
      </Subtitle>
      </div>
    </Card>
  );
}

export default ServiceCard;
