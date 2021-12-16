import React from "react";
import { Link } from "react-router-dom";
import { Anchor, ListItem, NavbarSection, UlList, Logo, Span } from "./style";



const Navbar = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <h2><Span>Lina</Span> Profile</h2>
                </Logo>
                <UlList>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><Link to="/contact">Contact</Link></ListItem>

                </UlList>
            </div>
        </NavbarSection>
    )
}
export default Navbar;

