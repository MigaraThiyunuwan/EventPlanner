import React from "react";
import heroImageData from "../data/heroImageData";
import HeroImage from "../components/Services/HeroImage";
import NavigationBar from "../components/NavigationBar";
import PriceCard from "../components/PriceCard";
import FooterComponent from "../components/FooterComponent";

function Music() {
  return (
    <div>
      <NavigationBar />

      {/*main section*/}
      {heroImageData.map(
        (data, index) => index === 3 && <HeroImage key={index} data={data} />
      )}

      <PriceCard />
      <FooterComponent />
    </div>
  );
}

export default Music;
