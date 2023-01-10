import React from 'react'

export default function Navbar() {
    return (
        <nav className='nav__container'>
            <div className="logo">
                <h1>Party Deal</h1>
            </div>
            <div className="nav__links">
                <ul>
                    <li>Our Services</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="inquiry">
                <h3>Inquiry</h3>
                <span>08023022936</span>
            </div>
        </nav>
    )
}
