import React from "react";
import "./style.js";
import { useState, useEffect } from "react";
import { ProfilSection, ProfilTitle, Profils, TitlSpan, ProfilItem, ItemSpan, Web, Skills, SkillsTitle, SkillsDescription, Bar, Perc, Parent, ParentSpan } from "./style.js";
import axios from "axios";

const Profil = () => {

    const [skills, setSkills] = useState([])
    useEffect(() => {
        axios.get('js/data.json').then(res => setSkills(res.data.Profil))
    }, [])
    const mySkills = skills.map(skillItem => {
        return (
            <Bar item={skillItem.id} key={skillItem.id}>
                <span className="title">{skillItem.skill}</span>
                <Perc>{skillItem.perc}</Perc>
                <Parent>
                    <ParentSpan></ParentSpan>
                </Parent>
            </Bar>

        )
    })
    return (
        <ProfilSection>
            <div className="container">

                <Profils>
                    <ProfilTitle><TitlSpan>My </TitlSpan>Profil</ProfilTitle>
                    <ul className="profil-list">
                        <ProfilItem>
                            <ItemSpan>FirstName</ItemSpan>
                            Lina
                        </ProfilItem>
                        <ProfilItem>
                            <ItemSpan>LastName</ItemSpan>
                            Reslan
                        </ProfilItem>
                        <ProfilItem>
                            <ItemSpan>Address</ItemSpan>
                            Syria-Tartous
                        </ProfilItem>
                        <ProfilItem>
                            <ItemSpan>Birthday</ItemSpan>
                            15/07/1982
                        </ProfilItem>
                        <ProfilItem>
                            <ItemSpan>Phone</ItemSpan>
                            00963987293376
                        </ProfilItem>
                        <ProfilItem>
                            <ItemSpan>Email</ItemSpan>
                            <Web>linareslan92 @gmail.com</Web>
                        </ProfilItem>

                    </ul>

                </Profils>
                <Skills>
                    <SkillsTitle>Some <TitlSpan>Skills</TitlSpan></SkillsTitle>
                    <SkillsDescription>I work in the field of website  development, and I acquired a variety of skills, including dealing with a team, dealing </SkillsDescription>
                    {mySkills}
                </Skills>
            </div>

        </ProfilSection>
    )
}
export default Profil;