import React from "react";
import { Stats, Component } from "./statistic.element";
import CountUp from 'react-countup';

function Statistic(props) {
  return (
    <Stats>
      <div className="stats-cont">
        <Component>
          <div className="desc">Working successfully since</div>
          <div className="count">2021</div>
          <div className="sub-des ">Founded</div>
        </Component>


        <Component>
          <div className="desc">Solution delivered <br/>to</div>
          <div className="count"><CountUp end={100} duration={10} /></div>
          <div className="sub-des ">Clients</div>
        </Component>
   

        <Component>
          <div className="desc">Successfully <br/>Completed</div>
          <div className="count"><CountUp end={250} duration={10} /></div>
          <div className="sub-des ">Projects</div>
        </Component>

     
        <Component>
          <div className="desc">Have more <br/>than</div>
          <div className="count"><CountUp end={50} duration={10} /></div>
          <div className="sub-des ">Experties</div>
        </Component>
        </div>
    </Stats>
  );
}

export default Statistic;
