import styled from "styled-components";

export const Banner =  styled.div`
color: rgb(255, 255, 255);
    padding: 75px 0px;
    background: rgb(28, 32, 40);
`;

export const HeadingTeam = styled.h1`
text-align: center;
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  color: #fff;  
  padding-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
    width: 40%;
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;