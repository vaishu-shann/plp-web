import styled from "styled-components";

export const Card = styled.div`
  /* background: #242934; */
  border: 1px solid #353b48;
  border-radius: 8px;
  padding:20px 16px;
  margin-bottom: 16px;
  margin-right: 16px;
  width: 350px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  display: flex;
  justify-content: space-between;
  .icon{
    width: 38px;
    height: 28px;
    margin:16px 20px auto auto;
    display: block;
  }
`;

export const Heading = styled.h1`
text-align: left;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #fff;
  padding-top: 16px;
  padding-bottom: 10px;
`;

export const Subtitle = styled.p`
text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #b7b9cd;
`;
