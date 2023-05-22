import styled from 'styled-components';


export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color:#f7f8fa;
  text-align: center;
  margin-top: 40px;
`;
export const HeadingTeam = styled.h1`
text-align: center;
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  color: #fff;  
  padding-bottom: 50px;
`;

export const CardList = styled.div`
max-width:1100px;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin: 40px auto;
.card{
  background: rgb(36, 41, 52);
    border: 1px solid rgb(53, 59, 72);
    border-radius: 8px;
    padding: 32px 16px;
    margin-bottom: 16px;
    margin-right: 16px;
    width: 48%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
`;

export const Headingsmall = styled.h1`
text-align: center;
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  color: rgb(4, 103, 251);  
  padding-bottom: 10px;
`;


export const Subtitle = styled.p`
text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #b7b9cd;
`;

export const TeamList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
.singleCard{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin-bottom: 50px;
}
.img-circle{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 25px;
}
`;
