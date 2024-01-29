import React from 'react'
import UseUser from './UseUser';
import logotrans from '../images/logo_trans.png'
import { Button, Navbar } from 'flowbite-react';
function NewNav() {
    const user = UseUser();
    let link = null
    let link2 = null
    let linkName = null
    if (!user) {
        // return <div>Loading...</div>;
        link2 = "/signin"
        link = "/signin";
        linkName =  "Login";
    }
    if (user) {
        link2 = "services"
        link = user.role === "customer" ? "/user_profile" : "/adminprofile";
        linkName = user.role === "customer" ? "My Profile" : "Admin Profile";
    }
    return (
        <Navbar fluid rounded className='navcom'>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src={logotrans} className="navlogo mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" className='names'>
                    Home
                </Navbar.Link>

                <Navbar.Link href={link2} className='names'>Services</Navbar.Link>
                <Navbar.Link href="portfolio" className='names'>Portfolio</Navbar.Link>
                <Navbar.Link href="aboutus" className='names'>About</Navbar.Link>
                <Navbar.Link href="contact" className='names'>Contact</Navbar.Link>
                
                <a href={link}><Button className='navbutton'>{linkName}</Button></a>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NewNav
