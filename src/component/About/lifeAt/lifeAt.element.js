import styled from "styled-components";

export const PlpCont = styled.div`
color: rgb(255, 255, 255);
    padding: 75px 0px;
    background: rgb(28, 32, 40);
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color:#f7f8fa;
  text-align: center;
  margin-top: 40px;
`;

export const Options = styled.div`
max-width: 1300px;
width: 100%;
margin: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 25px 15px 0;
`;

export const Card = styled.div`
width: 42%;
margin: auto auto 25px;
padding: 15px;

.head-sec{
    display: flex;
    align-items: center;  
    .Card-img{
        width: 45px;
        height: 45px;
        margin-right: 10px;
    }  
    .head-text{
        font-size: 24px;
    line-height: 1.25;
    margin-bottom: 0;
    color: rgb(4, 103, 251);
    font-weight: 600;
    }

}
.desc-text{
        text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  padding-top: 10px;
  letter-spacing: 0.5px;
    }
`;