import Marquee from "react-fast-marquee";
import React from "react";
import { Heading, MarqueeSec } from "./marque.element";
import Statistic from "../Statistics";
// import "../../styles.css"

function MarqueeSection(props) {
  return (
    <MarqueeSec>
      <Heading> Our Investors / Domains </Heading>
      <Marquee speed={50}>
        <img
          src="https://www.sysvine.com/wp-content/uploads/2017/09/Highcharts-150x115.png"
          alt=""
          className="m-img"
        />
        <img
          src="https://www.sysvine.com/wp-content/uploads/2017/09/Qlikview-150x115.png"
          alt=""
          className="m-img"
        />
        <img
          src="https://www.sysvine.com/wp-content/uploads/2017/09/Qlikview-150x115.png"
          alt=""
          className="m-img"
        />
        <img
          src="https://www.sysvine.com/wp-content/uploads/2017/09/Apache-Spark-MLlib-150x115.png"
          alt=""
          className="m-img"
        />
        <img
          src="https://www.sysvine.com/wp-content/uploads/2017/09/Tensor-Flow-150x115.png"
          alt=""
          className="m-img"
        />
        <img
          src="https://www.sysvine.com/wp-content/uploads/2017/09/Machine-Learning-Deep-Learning-150x115.png"
          alt=""
          className="m-img"
        />
        <img
          src="https://www.sysvine.com/wp-content/uploads/2017/09/Qlikview-150x115.png"
          alt=""
          className="m-img"
        />
        <img
          src="https://www.sysvine.com/wp-content/uploads/2017/09/Qlikview-150x115.png"
          alt=""
          className="m-img"
        />
      </Marquee>
    </MarqueeSec>
  );
}

export default MarqueeSection;
