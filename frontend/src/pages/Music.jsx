import React from 'react'
import PriceCard from '../components/PriceCard'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'
import { Button, Tooltip } from 'flowbite-react';
import heroImageData from "../data/heroImageData";
import musicData from "../data/musicData"
import HeroImage from "../components/Services/HeroImage";
import ServiceCard from "../components/Services/ServiceCard";
import ServiceCardButton from "../components/Services/ServiceCardButton";

function Music() {
  return (
    <div>
      <NewNav/>

      {/*main section*/}
      {heroImageData.map(
        (data, index) => index === 3 && <HeroImage key={index} data={data} />
      )}

       {/*cards*/}
       <div className="abcd">
        <div className="wrapper">
          {musicData.map((service, index) => (
            <ServiceCard key={index} data={service} />
          ))}
        </div>
        <ServiceCardButton />
      </div>
     <Footer/>
    </div>
  );
}

export default Music;
