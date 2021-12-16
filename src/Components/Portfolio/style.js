import styled from "styled-components";

export const PortfolioSection = styled.div`
    padding: 20px;
    background-color: #f8f8f8;
    overflow:hidden
`


export const PortfolioTitle = styled.h2`
    margin-bottom:60px;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    `
export const Span = styled.span`
    font-weight: normal;
    `
export const PortfolioList = styled.ul`
    text-align: center;
    `
export const PortfolioItem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background: ${props => props.active ? " #eb5424" : ""};
    color: ${props => props.active ? "#fff" : ""}
    `

export const BoxImage = styled.div`
    float: left;
    width: 25%;
    position: relative;
    &:hover > div{
        opacity:1
    }
    `
export const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    `
export const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.4);
    opacity: 0;
    `
export const OverlaySpan = styled.span`
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: #fff;
    padding: 10px 20px;
    transform: translate(-50%, -50%);
    border: 1px solid #eb5424;
    cursor: pointer;
    `
