import React, { useState } from "react";
import { Button } from "flowbite-react";
import NewNav from "../components/NewNav";
import Footer from "../components/Footer";
import entertainment from "../images/entertainment.jpg";
import cateringimg from "../images/cateringimg.jpg";
import photographyimg from "../images/photographyimg.jpg";
import decorationimg from "../images/decorationimg.jpg";
import DateComponent from "../components/DateComponent";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();

  const [date, setDate] = useState(undefined);

  return (
    <div>
      <NewNav />
      <header>
        <div className="overlay">
          <h1>Our Services</h1>
          <p>
            Bliss Hub.. ultimate online destination for seamless wedding
            planning!
          </p>
          <br></br>
          {/* <a href='signup'><button1>Sign Up Now</button1></a> */}
        </div>
      </header>

      <div className="hometitle">
        Cherish Every Moment <br></br> with Our Expertise
      </div>

      <section class="articles">
        <article>
          <div class="bg-secondary article-wrapper">
            <figure>
              <img src={entertainment} alt="" />
            </figure>
            <div class="article-body">
              <h2>Entertainment</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="bg-secondary article-wrapper">
            <figure>
              <img src={cateringimg} alt="" />
            </figure>
            <div class="article-body">
              <h2>Catering</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="bg-secondary article-wrapper">
            <figure>
              <img src={photographyimg} alt="" />
            </figure>
            <div class="article-body">
              <h2>Photography</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="bg-secondary article-wrapper">
            <figure>
              <img src={decorationimg} alt="" />
            </figure>
            <div class="article-body">
              <h2>Decoration</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
            </div>
          </div>
        </article>
      </section>

      <div className="bg-secondary serviceDateContainer">
        <span>Get Start Entering Your date: -</span>
        <input
          type="date"
          value={date}
          onChange={(d) => setDate(d.target.value)}
        />
        {/* <DateComponent/> */}
        <Button
          onClick={() => {

            if (date){
                navigate("/music", {
                    state: {
                      date: date,
                    },
                  });
            }
          }}
          className="servicebtn"
        >
          Next
        </Button>
      </div>

      <Footer />
    </div>
  );
}

export default Service;
