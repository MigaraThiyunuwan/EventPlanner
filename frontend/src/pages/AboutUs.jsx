import React from 'react'
import couple from '../images/couple2.jpg'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'
import Feedback from '../components/Feedback'

function AboutUs() {
    return (
        <div>
            <NewNav />
            <header>
                <div className="overlay">
                    <h1>About BlissHub</h1>
                    <p>Bliss Hub.. ultimate online destination for seamless wedding planning!</p>
                    <br></br>
                    {/* <a href='signup'><button1>Sign Up Now</button1></a> */}
                </div>
            </header>

            <div className='hometitle'>
                Cherish Every Moment <br></br> with Our Expertise
            </div>


            <div className='flex flex-col justify-center items-center md:flex-row' style={{ marginTop: 50, marginBottom: 50 }}>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <img
                        style={{ width: 400, height: 600, }}
                        className="aboutimg"
                        src={couple}
                        alt="image description"
                    />
                </div>
                <div className=' w-full md:w-2/3  justify-start items-center'>
                    <p className='description'>
                        <div className='abouttitle'>Who we are?</div>
                        At BlissHub we understand that your wedding day is a momentous occasion,
                        and we're here to transform your dreams into a reality.
                        Our platform provides a one-stop solution for engaged couples,
                        offering a user-friendly interface that simplifies the entire wedding planning process.
                        <br></br><br></br> Your wedding is as unique as your love story. Bliss Hub is committed to providing a personalized experience,
                        allowing you to showcase your individual style and preferences.
                        Create a wedding that reflects your personality and leaves a lasting impression on you and your guests.
                        <br></br><br></br>
                        Join Bliss Hub today and embark on a stress-free journey to your dream wedding. Let us be your guide as you plan, connect,
                        and celebrate the beginning of your happily ever after!
                    </p>
                </div>

            </div>

            <h1 className='title'>User Feedbacks</h1>

            <div className='feedbackcon'>
                <Feedback msg="Let us be your guide as you plan, connect,and celebrate the beginning of your happily ever after!" username="Migara Thiyunuwan"> </Feedback>
                <Feedback msg="Let us be your guide as you plan, connect,and celebrate the beginning of your happily ever after!" username="Migara Thiyunuwan"> </Feedback>
                <Feedback msg="Let us be your guide as you plan, connect,and celebrate the beginning of your happily ever after!" username="Migara Thiyunuwan"> </Feedback>
            </div>
            
            <Footer />

        </div>
    )
}

export default AboutUs
