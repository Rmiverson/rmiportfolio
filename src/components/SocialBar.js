import React from "react";

import { BsLinkedin, BsTwitter, BsInstagram, BsMedium, BsDribbble } from 'react-icons/bs'

const SocialBar = () => {
    return (
        <div className="social-bar">
            <a href="https://www.linkedin.com/in/rmiverson/" target="_blank" rel="noreferrer noopener"><BsLinkedin />Linkedin</a>
            <a href="https://twitter.com/rmiverson99" target="_blank" rel="noreferrer noopener"><BsTwitter />Twitter</a>
            <a href="https://www.instagram.com/rmiverson/" target="_blank" rel="noreferrer noopener"><BsInstagram />Instagram</a>
            <a href="https://rmiverson.medium.com/" target="_blank" rel="noreferrer noopener"><BsMedium />Medium</a>
            <a href="https://dribbble.com/rmiverson" target="_blank" rel="noreferrer noopener"><BsDribbble />Dribble</a>
        </div>
    )
}

export default SocialBar