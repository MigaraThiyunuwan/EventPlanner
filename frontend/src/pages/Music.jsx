import React from 'react'
import PriceCard from '../components/PriceCard'
import NewNav from '../components/NewNav'
import Footer from '../components/Footer'
import { Button, Tooltip } from 'flowbite-react';
import heroImageData from "../data/heroImageData";
import HeroImage from "../components/Services/HeroImage";
import NavigationBar from "../components/NavigationBar";
import FooterComponent from "../components/FooterComponent";

function Music() {
  return (
    <div>
      <NewNav/>

      {/*main section*/}
      {heroImageData.map(
        (data, index) => index === 3 && <HeroImage key={index} data={data} />
      )}

      <PriceCard />
     <Footer/>
    </div>
  );
}

export default Music;
