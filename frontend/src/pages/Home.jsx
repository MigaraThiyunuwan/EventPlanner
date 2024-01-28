import React from 'react'
import '../css/pricingCard.css'
import '../css/home.css'
import '../css/portfolio.css'
import '../css/service.css'
import '../css/services.css'
import '../css/feedback.css'
import dj from '../images/dj.jpg'
import catering from '../images/catering.jpg'
import deco from '../images/deco.jpg'
import photo from '../images/photo.jpg'
import couple from '../images/couple.jpg'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'
import "../css/pricingCard.css";
import "../css/home.css";
function Home() {
  
  return (
    <div>
      <NewNav/>
      <header>
        <div className="overlay">
          <h1>Welcome to BlissHub </h1>
          <p>Bliss Hub.. ultimate online destination for seamless wedding planning!</p>
          <br></br>
          <a href="signup">
            <button1>Sign Up Now</button1>
          </a>
        </div>
      </header>

      <div className="hometitle">
        Cherish Every Moment <br></br> with Our Expertise

      </div>

      <div
        className="flex flex-col justify-center items-center md:flex-row"
        style={{ marginTop: 50, marginBottom: 50 }}
      >
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            style={{ width: 400, height: 600 }}
            className="aboutimg"
            src={couple}
            alt="image description"
          />
        </div>
        <div className=" w-full md:w-2/3  justify-start items-center">
          <p className="description">
            <div className="abouttitle">At BlissHub,</div>
            we understand that your wedding day is a momentous occasion, and
            we're here to transform your dreams into a reality. Our platform
            provides a one-stop solution for engaged couples, offering a
            user-friendly interface that simplifies the entire wedding planning
            process.
            <br></br>
            <br></br> Your wedding is as unique as your love story. Bliss Hub is
            committed to providing a personalized experience, allowing you to
            showcase your individual style and preferences. Create a wedding
            that reflects your personality and leaves a lasting impression on
            you and your guests.
            <br></br>
            <br></br>
            Join Bliss Hub today and embark on a stress-free journey to your
            dream wedding. Let us be your guide as you plan, connect, and
            celebrate the beginning of your happily ever after!
          </p>
        </div>
      </div>

      <h1 className='title'>Our Services</h1>
      <div className='our-services'>

        <div className='cardcontainer'>
          <a href="#" class="serviceCard flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="serviceimg object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={dj} alt=""></img>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>
        <div className='cardcontainer'>
          <a href="#" class="serviceCard flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class=" serviceimg object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={catering} alt=""></img>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className=' our-services '>
        <div className='cardcontainer'>
          <a href="#" class="serviceCard flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="serviceimg object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={deco} alt=""></img>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>
        <div className='cardcontainer'>
          <a href="#" class="serviceCard flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="serviceimg object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={photo} alt=""></img>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>
      </div>

      <Footer />


    </div>
  );
}

export default Home;
