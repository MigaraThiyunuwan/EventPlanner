import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo_png from '../images/logo_trans.png'
export default function FooterComponent() {
    return (
        <Footer container className='footercom'>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand style={{padding:20}}
                            href="/"
                            src={logo_png}
                            alt="Flowbite Logo"
                            
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
                        <div style={{ flex: 1, minWidth: 0, padding:60 }}>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Flowbite</Footer.Link>
                                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 ,padding:60}}>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div style={{ flex: 1, minWidth: 0,padding:60 }}>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                
            </div>
        </Footer>
    )
}
