import React from 'react'

import logotrans from '../images/logo_trans.png'
import {Button, Navbar } from 'flowbite-react';
function NewNav() {
    return (
        <Navbar fluid rounded className='navcom'>
            <Navbar.Brand  href="https://flowbite-react.com">
                <img src={logotrans} className="navlogo mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" className='names'>
                    Home
                </Navbar.Link>
                
                <Navbar.Link href="services" className='names'>Services</Navbar.Link>
                <Navbar.Link href="portfolio" className='names'>Portfolio</Navbar.Link>
                <Navbar.Link  href="aboutus" className='names'>About</Navbar.Link>
                <Navbar.Link href="contact" className='names'>Contact</Navbar.Link>
                <a  href="signin"><Button className='navbutton'>Login</Button></a>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NewNav
