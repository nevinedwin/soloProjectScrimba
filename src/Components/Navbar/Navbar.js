import React from 'react'
import { GoGlobe } from 'react-icons/go'
import './Navbar.css'

function Navbar() {
    return (
        <div className='nav-container'>
            <div className='title-cont'>
                <GoGlobe className='logo' />
                <h4 className='title'> my travel journal.</h4>
            </div>
        </div>
    )
}

export default Navbar 
