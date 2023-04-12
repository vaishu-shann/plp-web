import React from "react";
import { PlpCont, Heading, Options, Card } from "./lifeAt.element";
import Image1 from "../../../assets/images/Picture1.png";

function LifeAtPlp(props) {
  return (
    <PlpCont>
      <Heading>
        Life At <span style={{ color: "rgb(4, 103, 251)" }}>PLP Data</span>
      </Heading>

      <Options>
        <Card>
          <div className="head-sec">
            <img src={Image1} alt="" className="Card-img" />
            <div className="head-text">Technology</div>
          </div>
          <div className="desc-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum
          </div>
        </Card>
        <Card>
          <div className="head-sec">
            <img src={Image1} alt="" className="Card-img" />
            <div className="head-text">Open Culture</div>
          </div>
          <div className="desc-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum
          </div>
        </Card>
        <Card>
          <div className="head-sec">
            <img src={Image1} alt="" className="Card-img" />
            <div className="head-text">Open Culture</div>
          </div>
          <div className="desc-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum
          </div>
        </Card>
        <Card>
          <div className="head-sec">
            <img src={Image1} alt="" className="Card-img" />
            <div className="head-text">Technology</div>
          </div>
          <div className="desc-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum
          </div>
        </Card>

      </Options>
    </PlpCont>
  );
}

export default LifeAtPlp;
