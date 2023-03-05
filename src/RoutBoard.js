import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AboutMe from './containers/AboutMe/AboutMe.js'
import Contact from './containers/Contact/Contact.js'
import Design from './containers/Design/Design.js'
import Development from './containers/Development/Development.js'
import Photography from './containers/Photography/Photography.js'

const RouteBoard = (props) => {
    return (
        <Routes>
            <Route index element={<AboutMe data={props.result} />} />
            <Route path='/development' element={<Development data={props.result} />} />
            <Route path='/design' element={<Design data={props.result} />} />
            <Route path='/photography' element={<Photography data={props.result} />} />
            <Route path='/Contact' element={<Contact data={props.result} />} />

            <Route path='*' element={<div>404 Page Not Found.</div>} />
        </Routes>
    )
}

export default RouteBoard