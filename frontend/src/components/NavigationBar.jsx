
import React from 'react'
import { Button, Navbar } from 'flowbite-react';
import logotrans from '../images/logo_trans.png'

// 'use client';


export default function NavigationBar() {
  return (
    <Navbar fluid rounded >
      <Navbar.Brand href="/">
        <img src= {logotrans} className="mr-3 h-8 sm:h-9" alt="Flowbite React Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
      </Navbar.Brand>
      {/* <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div> */}
      <Navbar.Collapse>
        <Navbar.Link className='text-lg mt-1' href="#">
          Home
        </Navbar.Link>
        <Navbar.Link className='text-lg mt-1' href="#">About</Navbar.Link>
        <Navbar.Link className='text-lg mt-1' href="#">Services</Navbar.Link>
        <Navbar.Link className='text-lg mt-1' href="#">Pricing</Navbar.Link>
        <Navbar.Link className='text-lg mt-1' href="#">Contact</Navbar.Link>
        <div className="flex md:order-2">
        <Button style={{backgroundColor:'#88AB8E'}}>Login</Button>
        <Navbar.Toggle />
      </div>
      </Navbar.Collapse>
    </Navbar>
  )
}
