import React, { useState } from 'react'
import {FaBars, FaCartPlus, FaEnvelopeOpenText, FaFileAlt, FaHome, FaQuestionCircle, FaTimes, FaUsers} from "react-icons/fa"
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = ()=>{
        setNav(!nav)
    }
    const closeMenu =()=>{
        setNav(false)
    }

    return (
        <nav className='navbar'>
            <FaBars onClick={handleClick} className='nav-icon' />

            <ul className={nav ? "nav-items open" : 'nav-items'}>
                <li><FaTimes onClick={handleClick} className='nav-icon-close' /></li>

                <li onClick={closeMenu}><Link className='nav-item' to="/"><FaHome className='nav-item-icon' /> Home</Link></li>
                <li onClick={closeMenu}><Link className='nav-item' to="/reports"><FaFileAlt className='nav-item-icon' /> Reports</Link></li>
                <li onClick={closeMenu}><Link className='nav-item' to="/products"><FaCartPlus className='nav-item-icon' /> Products</Link></li>
                <li onClick={closeMenu}><Link className='nav-item' to="/teams"><FaUsers className='nav-item-icon' /> Teams</Link></li>
                <li onClick={closeMenu}><Link className='nav-item' to="/messages"><FaEnvelopeOpenText className='nav-item-icon' /> Messages</Link></li>
                <li onClick={closeMenu}><Link className='nav-item' to="/support"><FaQuestionCircle className='nav-item-icon' /> Support</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
