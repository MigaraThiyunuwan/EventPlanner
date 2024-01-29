import React from "react";
import heroImageData from "../data/heroImageData";
import HeroImage from "../components/Services/HeroImage";
import Footer from "../components/Footer";
import ServiceCardButton from "../components/Services/ServiceCardButton";
import cateringData from "../data/cateringData";
import ServiceCard from "../components/Services/ServiceCard";
import NewNav from "../components/NewNav";

const Catering = () => {
  return (
    <>
      {/*navbar*/}
      
      <NewNav/>

      {/*main section*/}
      {heroImageData.map(
        (data, index) => index === 0 && <HeroImage key={index} data={data} />
      )}

      {/*cards*/}
      <div className="abcd">
        <div className="wrapper">
          {cateringData.map((service, index) => (
            <ServiceCard key={index} data={service} />
          ))}
        </div>
        <ServiceCardButton />
      </div>

      {/*footer*/}
      <Footer />
    </>
  );
};
export default Catering;
