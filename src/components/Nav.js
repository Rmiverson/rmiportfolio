import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <Link className="nav-item" to='/'>About Me</Link>
            <Link className="nav-item" to='/development'>Development</Link>
            <Link className="nav-item" to='/design'>Design</Link>
            <Link className="nav-item" to='/photography'>Photography</Link>
            <Link className="nav-item" to='/contact'>Contact</Link>
        </nav>
    );
};

export default Nav;