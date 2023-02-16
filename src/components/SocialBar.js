import React from "react";

import { BsLinkedin, BsTwitter, BsInstagram, BsMedium, BsDribbble } from 'react-icons/bs'

const SocialBar = () => {
    return (
        <div className="social-bar">
            <a href="https://www.linkedin.com/in/rmiverson/"><BsLinkedin />Linkedin</a>
            <a href="https://twitter.com/rmiverson99"><BsTwitter />Twitter</a>
            <a href="https://www.instagram.com/rmiverson/"><BsInstagram />Instagram</a>
            <a href="https://rmiverson.medium.com/"><BsMedium />Medium</a>
            <a href="https://dribbble.com/rmiverson"><BsDribbble />Dribble</a>
        </div>
    )
}

export default SocialBar