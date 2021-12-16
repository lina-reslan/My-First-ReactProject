import styled from "styled-components";

export const ProfilSection = styled.div`
    padding: 50px 0;
    overflow:hidden
    `

export const Profils = styled.div`
    float: left;
    width: 50%;
    `
export const ProfilTitle = styled.h2`
    font-size: 30px;
    `
export const TitlSpan = styled.span`
    font-weight: normal;
    `
export const ProfilItem = styled.li`
    margin-bottom: 10px;
    `
export const ItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold;
    `
export const Web = styled.span`
    color:#eb5424;
    width:auto
    `
export const Skills = styled.div`
    float: left;
    width: 50%;
    `
export const SkillsTitle = styled.h2`
    font-size: 30px;
    `

export const SkillsDescription = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 24px;
    `
export const Bar = styled.div`
    margin-bottom: 20px;
    `
export const Perc = styled.span`
    margin-right: 50px;
    float: right;
    `
export const Parent = styled.div`
    position: relative;
    height: 2px;
    background: #f8f8f8;
    top: 5px;
    `
export const ParentSpan = styled.span`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    background: #eb5424;
    width : ${props => props.item === 1 ? "100%" : ""};
    width : ${props => props.item === 2 ? "100%" : ""};
    width : ${props => props.item === 3 ? "100%" : ""};
    width : ${props => props.item === 4 ? "90%" : ""};
    width : ${props => props.item === 5 ? "90%" : ""};
    `

