import React from "react";
import {
  Heading,
  Headingsmall,
  Subtitle,
  CardList,
  HeadingTeam,
  TeamList,
} from "./team.element";

function OurTeam(props) {
  return (
    <div>
      <Heading>Meet our team</Heading>
      <CardList>
        <div className="card">
          <Headingsmall>Team Crew</Headingsmall>
          <Subtitle>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem
          </Subtitle>
        </div>
        <div className="card">
          <Headingsmall>Team Crew</Headingsmall>
          <Subtitle>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam
            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem
          </Subtitle>
        </div>
      </CardList>

      <div style={{ marginTop: 40 }}> </div>
      <HeadingTeam>Our Tech Team</HeadingTeam>
      <TeamList>
        <div className="singleCard">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
            className="img-circle"
          />
          <Headingsmall>User123</Headingsmall>
          <Subtitle>Head, Research, Data, Analytics Services  </Subtitle>
        </div>
        <div className="singleCard">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
            className="img-circle"
          />
          <Headingsmall>User456</Headingsmall>
          <Subtitle>Director, Product Engineering Services</Subtitle>
        </div>
        <div className="singleCard">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
            className="img-circle"
          />
          <Headingsmall>User456</Headingsmall>
          <Subtitle>Head, Healthcare Technology Services</Subtitle>
        </div>
        <div className="singleCard">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
            className="img-circle"
          />
          <Headingsmall>User789</Headingsmall>
          <Subtitle>Head, Research, Data, Analytics Services</Subtitle>
        </div>
        <div className="singleCard">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
            className="img-circle"
          />
          <Headingsmall>User789</Headingsmall>
          <Subtitle>Director, Product Engineering Services</Subtitle>
        </div>
        <div className="singleCard">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
            className="img-circle"
          />
          <Headingsmall>User123</Headingsmall>
          <Subtitle>Healthcare Technology Services</Subtitle>
        </div>
        <div className="singleCard">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg"
            className="img-circle"
          />
          <Headingsmall>User456</Headingsmall>
          <Subtitle>Head, Research, Data, Analytics Services</Subtitle>
        </div>
      </TeamList>
    </div>
  );
}

export default OurTeam;
