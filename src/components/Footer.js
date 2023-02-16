import React from "react";

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <p>Copyright &copy; Riley M. Iverson {year}</p>
            <p>All Media including: images, photography, illustrations, and designs are my intellectual property.</p>
            <p>Do not use for commercial or private purposes without my express permission.</p>
            <p>For any questions or concerns, please contact me at rmiverson99@gmail.com.</p>
        </footer>
    )
}

export default Footer