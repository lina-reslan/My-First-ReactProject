
import styled from "styled-components";

export const SocialSection = styled.div`
    height:auto;
    overflow:hidden;
`
export const SocialDescription = styled.div`
    float:left
`
export const SocialMedia = styled.div`
float:left;
width:33.33%;
padding:100px 0 100px 50px;
box-sizing:border-box;
background: ${props => props.item === 1 ? "#3b5998" : ""};
background: ${props => props.item === 2 ? "#498cbf" : ""};
background: ${props => props.item === 3 ? "#cc2127" : ""}
`
export const Icon = styled.i`
    width:50px;
    height:50px;
    text-align:center;
    line-height:50px;
    color:#888;
    background:#fff;
    float:left;
    font-size:22px;
    margin-right:20px
`
export const Span = styled.span`
    display:block;
    font-size:20px;
    margin-bottom:10px
`
export const Anchor = styled.a`
   text-decoration:none;
   font-weight:bold;
   font-size:22px
`