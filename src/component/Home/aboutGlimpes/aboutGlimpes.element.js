import styled from "styled-components";

export const AboutSec = styled.div`
  color: #fff;
  padding: 80px 0;
  background: #1c2028;

  .about-container{
    max-width: 1300px;
    width: 100%;
    margin: auto;
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
    padding-left: 50px;
  }
  .gif-img{
    width: 238px;
    height: 98px;
  }
`;

export const AboutDescription = styled.div`
max-width: 50%;
.Head-text{
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 3px;
    text-transform: uppercase;
    line-height: 1.43;
    font-weight: 700;
    color: rgb(4, 103, 251);
}
.Title-text{
color: white;
font-size: 36px;
line-height: 60px;
    letter-spacing: .36px;
    font-weight: 700;
}
.description{
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.74;
    color: #fff;
    padding-top: 20px;
}
`;