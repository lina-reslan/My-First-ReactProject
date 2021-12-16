import styled from "styled-components";

export const HomeSection = styled.div`
        height: 500px;
        background: url('/images/p3.png');
        background-position: center;
        background-size: cover;
        text-align: center;
        position: relative;
`
export const HomeInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
export const HomeTitle = styled.h2`
    font-size: 60px;
    color: #5e5e5e;
    font-weight: bold;
`
export const HomeInfo = styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`
export const HomeDescription = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;
`
export const HomeBtn = styled.button`
  background-color:#eb5424;
  color:#fff;
  padding:10px 30px;
  cursor:pointer;
  border:none;
  font-size:18px;
  font-weight:bold
  
  &:hover{
    background-color:#fff;
      color:#eb5424
  }
`
