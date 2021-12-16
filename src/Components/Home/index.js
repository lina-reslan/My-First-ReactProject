import React from "react";
import { HomeSection, HomeDescription, HomeInfo, HomeTitle, HomeInformation, HomeBtn } from "./style";


const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Lina Reslan</HomeTitle>
                    <HomeInfo>Front End Developer</HomeInfo>
                    <HomeDescription>Iam aprofessional Front end developer creating modern and responsive designs to web.Let's us work togother . Thank you. </HomeDescription>
                    <HomeBtn>Let's Begin</HomeBtn>

                </HomeInformation>
            </div>

        </HomeSection>
    )
}
export default Home;