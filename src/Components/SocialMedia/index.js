import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.js";
import { SocialSection, SocialMedia, Icon, Span, Anchor, SocialDescription } from "./style.js";

const SocilaMedia = () => {

    const [socials, setSocials] = useState([])
    useEffect(() => {
        axios.get('js/data.json').then(res => setSocials(res.data.social))
    }, [])
    const socialMedia = socials.map((socialItem) => {
        return (
            <SocialMedia item={socialItem.id} key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <SocialDescription>
                    <Span>Follow Me On</Span>
                    <Anchor>{socialItem.body}</Anchor>
                </SocialDescription>
            </SocialMedia>

        )
    })
    return (
        <SocialSection>
            {socialMedia}

        </SocialSection>
    )
}
export default SocilaMedia;