import React from "react";
import "../css/pricingCard.css";
import "../css/home.css";
import "../css/contactus.css";
import NavigationBar from "../components/NavigationBar";
import FooterComponent from "../components/FooterComponent";
import dj from "../images/dj.jpg";
import catering from "../images/Food.jpeg";
import deco from "../images/deco.jpg";
import photo from "../images/photo.jpg";
import logo from "../images/about.png";

function Home() {
  return (
    <div>
      <NavigationBar />
      <header>
        <div className="overlay">
          <h1>Welcome to BlissHub</h1>
          <h3>Reasons for Choosing US</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            nostrum quis, odio veniam itaque ullam debitis qui magnam
            consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis
            qui magnam consequatur ab.
          </p>
          <br></br>
          <a href="signup">
            <button1>SignUp Now</button1>
          </a>
        </div>
      </header>
      <h1 className="title">Our Services</h1>
      <div className="our-services">
        <div className="cardcontainer">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={dj}
              alt=""
            ></img>
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
        <div className="cardcontainer">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              style={{ height: 225 }}
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={catering}
              alt=""
            ></img>
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
      <div className=" our-services ">
        <div className="cardcontainer">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              style={{ height: 225 }}
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={deco}
              alt=""
            ></img>
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
        <div className="cardcontainer">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              style={{ height: 225 }}
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={photo}
              alt=""
            ></img>
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

      <div className="homeaboutus">
        <img
          style={{ width: 400, height: 300, margin: 20 }}
          class="h-auto max-w-full"
          src={logo}
          alt="image description"
        ></img>

        <div class="vl"></div>

        <div className="aboutdiv">
          <div className="abouttitle">Who we are?</div>
          <p style={{ margin: 20 }}>
            Save time, boost productivity and supercharge your workflow by
            implementing the world's best automatic background removal
            integration into your everyday work. Here is a curated selection of
            the top solutions for remove.bg.
          </p>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Home;
