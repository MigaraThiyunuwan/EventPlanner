import React from 'react'
import img from '../images/portfolio/1.jpg'
import img1 from '../images/portfolio/7.jpg'
import img2 from '../images/portfolio/3.jpg'
import img3 from '../images/portfolio/8.jpg'
import img4 from '../images/portfolio/4.jpg'
import img5 from '../images/portfolio/5.jpg'
import img6 from '../images/portfolio/6.jpg'
import img7 from '../images/portfolio/10.jpg'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'

function Portfolio() {
    return (
        <div>
            <NewNav />
            <header>
                <div className="overlay">
                    <h1>Our Portfolio</h1>
                    <p>Bliss Hub.. ultimate online destination for seamless wedding planning!</p>
                    <br></br>

                </div>
            </header>
            {/* <div className='portfolioTitle'>
                <div className='inner'>
                    Photo <span>Gallery</span>
                </div>
            </div> */}
            <div className='hometitle'>
                Cherish Every Moment <br></br> with Our Expertise
            </div>
            <div className='imgContainer'>
                <img className='image' src={img} alt="Girl in a jacket" width="475" height="500"></img>
                <img className='image' src={img1} alt="Girl in a jacket" width="475" height="600"></img>
                <img className='image' src={img2} alt="Girl in a jacket" width="475" height="600"></img>
                <img className='image' src={img3} alt="Girl in a jacket" width="475" height="600"></img>
                <img className='image' src={img4} alt="Girl in a jacket" width="475" height="600"></img>
                <img className='image' src={img5} alt="Girl in a jacket" width="475" height="600"></img>
                <img className='image' src={img6} alt="Girl in a jacket" width="475" height="600"></img>
                <img className='image' src={img7} alt="Girl in a jacket" width="475" height="600"></img>
            </div>
            <div className='portfolioBtn'>
                <a href='#'>More Photos</a>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio
