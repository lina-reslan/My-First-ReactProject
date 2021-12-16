import styled from "styled-components";

export const AboutSection = styled.div`
position:relative;
background-image:url('images/lina.png');
background-position:center;
background-size:cover;
background-attachment:fixed;
height:500px
`
export const Overlay = styled.div`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
background:rgb(0,0,0,0.5);
z-index:2
`
export const AboutMe = styled.div`
    position:relative;
    z-index:3;
    width: 50%;
    float: right;
`
export const AboutTitle = styled.h2`
    color:#fff;
    font-size: 45px;
`
export const Span = styled.span`
    font-weight: normal;
`
export const AboutSkill = styled.h4`
    font-size: 28px;
    color: #eb5424;
`
export const AboutDescription = styled.p`
        color:#fff;
        line-height: 1.8;
    
`
