import React, { Component } from "react";
import Home from "./../Home";
import Work from "./../Work";
import Portfolio from "./../Portfolio";
import Profil from "./../Profil";
import About from "./../About";
import SocilaMedia from "./../SocialMedia";
import Footer from "./../Footer";



class Index extends Component {
    render() {
        return (
            <div>
                <Home></Home>
                <Work></Work>
                <Portfolio></Portfolio>
                <Profil></Profil>
                <About></About>
                <SocilaMedia></SocilaMedia>
                <Footer></Footer>


            </div>


        );
    }

}

export default Index;
