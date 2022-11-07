import React from 'react'
import GlobeIcon from '../Icons/globe'


export default function Navbar() {
    return (
        <div className='navbar'>
            <GlobeIcon className='globe-icon' />
            <h3 className='nav-title'>My Travel Journal</h3>
        </div>
    )
}