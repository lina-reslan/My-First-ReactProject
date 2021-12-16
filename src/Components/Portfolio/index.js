import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./style.js";
import { PortfolioSection, Overlay, OverlaySpan, PortfolioItem, PortfolioList, PortfolioTitle, Span, Image, BoxImage } from "./style.js";

const Portfolio = () => {

    const [images, setImages] = useState([])
    useEffect(() => {
        axios.get("js/data.json").then(res => setImages(res.data.Portfolio))
    }, [])
    const PortfolioImages = images.map((imageItem) => {
        return (
            <BoxImage key={imageItem.id}>
                <Image src={imageItem.image} />
                <Overlay>
                    <OverlaySpan>Show Image</OverlaySpan>
                </Overlay>
            </BoxImage>

        )
    })
    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portofolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>Html</PortfolioItem>
                <PortfolioItem>Css</PortfolioItem>
                <PortfolioItem>JavaScript</PortfolioItem>
                <PortfolioItem>Jquery</PortfolioItem>
                <PortfolioItem>React</PortfolioItem>
                <PortfolioItem>PHP</PortfolioItem>
                <PortfolioItem>Bootstrap</PortfolioItem>

            </PortfolioList>
            <div className="box">
                {PortfolioImages}
            </div>

        </PortfolioSection>
    )
}
export default Portfolio;