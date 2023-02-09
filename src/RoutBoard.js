import React from "react";
import { Routes, Route } from "react-router-dom";

import AboutMe from "./containers/AboutMe"
import Contact from "./containers/Contact"
import Design from "./containers/Design"
import Development from "./containers/Development"
import Photography from "./containers/Photography"

const RouteBoard = () => {
    return (
        <Routes>
            <Route index element={<AboutMe />} />
            <Route path="/development" element={<Development />} />
            <Route path="/design" element={<Design />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/Contact" element={<Contact />} />

            <Route path="*" element={<div>404 Page Not Found.</div>} />
        </Routes>
    )
}

export default RouteBoard