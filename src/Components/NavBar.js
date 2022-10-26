import React from "react"
import {NavLink} from 'react-router-dom'

function NavBar(){ 
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/beers'>Beers</NavLink>
            <NavLink to='/addbeer'>Add Beer</NavLink>
        </nav>
    )
}

export default NavBar