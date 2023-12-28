import React from 'react'
import '../css/adminProfile.css'
import NavigationBar from '../components/NavigationBar'
import migara from '../images/migara.jpg'
import FooterComponent from '../components/FooterComponent'
import SideBar from '../components/SideBar'
import NewNav from '../components/NewNav'

function AdminProfile() {
    return (
        <div>
            <NewNav/>
            <div className='myunique'>
                
                <SideBar/>
                
                <div className="container">


                    <section className="userProfile card">
                        <div className="profile">
                            <figure><img src={migara} alt="profile" width="250px" height="250px" /></figure>
                        </div>
                    </section>

                    <section className="work_skills card">
                        <div className="work">
                            <h1 className="heading">work</h1>
                            <div className="primary">
                                <h1>Spotify New York</h1>
                                <span>Primary</span>
                                <p>170 William Street <br /> New York, NY 10038-212-315-51</p>
                            </div>

                            <div className="secondary">
                                <h1>Metropolitan <br /> Museum</h1>
                                <span>Secondary</span>
                                <p>S34 E 65th Street <br /> New York, NY 10651-78 156-187-60</p>
                            </div>
                        </div>

                      
                    </section>

                    <section className="userDetails card">
                        <div className="userName">
                            <h1 className="name">Migara Thiyunuwan</h1>
                            <p>BlissHub Manager</p>
                        </div>

                        <div className="rank">
                            <h1 className="heading">Rankings</h1>
                            <span>8,6</span>
                            <div className="rating">
                                <i className="ri-star-fill rate"></i>
                                <i className="ri-star-fill rate"></i>
                                <i className="ri-star-fill rate"></i>
                                <i className="ri-star-fill rate"></i>
                                <i className="ri-star-fill rate underrate"></i>
                            </div>
                        </div>

                        <div className="btns">
                            <ul>
                                <li className="sendMsg">
                                    <i className="ri-chat-4-fill ri"></i>
                                    <a href="#">Send Message</a>
                                </li>

                                <li className="sendMsg active">
                                    <i className="ri-check-fill ri"></i>
                                    <a href="#">Contacts</a>
                                </li>

                                <li className="sendMsg">
                                    <a href="#">Report User</a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="timeline_about card">
                        <div className="tabs">
                            <ul>
                                <li className="timeline">
                                    <i className="ri-eye-fill ri"></i>
                                    <span>Timeline</span>
                                </li>

                                <li className="about active">
                                    <i className="ri-user-3-fill ri"></i>
                                    <span>About</span>
                                </li>
                            </ul>
                        </div>

                        <div className="contact_Info">
                            <h1 className="heading">Contact Information</h1>
                            <ul>
                                {/* Your list items go here */}
                            </ul>
                        </div>
                    </section>
                </div>
            </div>

            <FooterComponent />



        </div>

    )
}

export default AdminProfile
