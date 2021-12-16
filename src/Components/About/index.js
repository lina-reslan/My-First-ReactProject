import React from "react";
import "./style.js"
import{AboutSection,AboutMe,AboutTitle,AboutSkill,AboutDescription,Span,Overlay} from "./style.js";

const About = () => {
    return (
        <AboutSection>
        <Overlay></Overlay>
            <div className="container">
            
                <AboutMe>
                    <AboutTitle><Span>This Is</Span> Me</AboutTitle>
                    <AboutSkill>Web Developer</AboutSkill>
                    <AboutDescription>My previous experiences proved to me that perseverance and persistence are the key to success in the face of any difficulties beyond my control. </AboutDescription>
                    <AboutDescription>My previous experiences proved to me that perseverance and persistence are the key to success in the face of any difficulties beyond my control. </AboutDescription>
                </AboutMe>
                
            </div>

        </AboutSection>
    )
}
export default About;