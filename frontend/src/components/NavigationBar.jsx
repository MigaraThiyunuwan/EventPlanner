
import React from 'react'
import { Button, Navbar } from 'flowbite-react';
import logotrans from '../images/logo_trans.png'
// 'use client';


export default function NavigationBar() {
  return (
    
      <Navbar fluid rounded className='navcom'>
        <Navbar.Brand href="/">
          <img src={logotrans} className="navlogo mr-3 h-8 sm:h-9" alt="Flowbite React Logo" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
        </Navbar.Brand>
        
        
        <Navbar.Toggle />
        
        <Navbar.Collapse>
          <Navbar.Link className='names text-lg mt-1' href="/">
            Home
          </Navbar.Link>
          
          <Navbar.Link className='names text-lg mt-1' href="#">Services</Navbar.Link>
          <Navbar.Link className='names text-lg mt-1' href="portfolio">Portfolio</Navbar.Link>
          <Navbar.Link className='names text-lg mt-1' href="aboutus">About</Navbar.Link>
          <Navbar.Link className='names text-lg mt-1' href="contactus">Contact</Navbar.Link>
          <div className="flex md:order-2">
            <a  href="signup"><Button className='navbutton'>Login</Button></a>
            <Navbar.Toggle />
          </div>
        </Navbar.Collapse>
      </Navbar>
   
  )
}
