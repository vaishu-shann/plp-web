import styled from 'styled-components';

export const PartnerSection = styled.div`
  color: #fff;
  padding: 120px 0;
  background:rgb(28, 32, 40) ;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color:#f7f8fa;
`;

export const Subtitle = styled.p`
  max-width:1100px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;


export const PartnerCard = styled.div`
max-width: 1100px;
margin:25px auto;
display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
.singleCard{
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 30%;
  margin-bottom: 50px;
}
.img-company{
  width: 150px;
  /* height: 200px;*/   
  margin-bottom: 25px; 
}
.name{
    font-size: 24px;
    color: #fff;
    line-height: 24px;
    font-weight: 600;
    text-align: left;
}
.desc{
    color: #a9b3c1;
    font-size: 16px;
    margin-top: 10px;
    text-align: left;

    line-height: 26px;
}
`; 