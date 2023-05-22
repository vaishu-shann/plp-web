import styled from "styled-components";


export const Stats = styled.div`
    padding: 50px 0px 120px;
    background: rgb(18, 21, 27);
    .stats-cont{
        max-width: 1100px;
        width: 100%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Component = styled.div`
width: 23%;
margin:20px auto 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.desc{
    font-size: 24px;
    font-weight: 600;
    line-height: 1.34;
    margin-bottom: 32px;
    color: #fff;
    text-align: center;
}
.sub-des{
    text-transform: uppercase;
    color: rgb(4, 103, 251);
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-top: 10px;
}
.count{
    font-size: 64px;
    color: rgb(4, 103, 251);
    font-weight: 700;
}
`;