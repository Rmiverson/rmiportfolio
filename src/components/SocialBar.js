import React from "react";

import { BsLinkedin, BsTwitter, BsInstagram, BsMedium, BsDribbble } from 'react-icons/bs'

const SocialBar = () => {
    return (
        <div className="social-bar">
            <a alt="Linkedin" href="https://www.linkedin.com/in/rmiverson/"><BsLinkedin />Linkedin</a>
            <a alt="Twitter" href="https://twitter.com/rmiverson99"><BsTwitter />Twitter</a>
            <a alt="Instagram" href="https://www.instagram.com/rmiverson/"><BsInstagram />Instagram</a>
            <a alt="Medium" href="https://rmiverson.medium.com/"><BsMedium />Medium</a>
            <a alt="Dribble" href="https://dribbble.com/rmiverson"><BsDribbble />Dribble</a>
        </div>
    )
}

export default SocialBar