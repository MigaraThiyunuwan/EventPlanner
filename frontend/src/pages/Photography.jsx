import React from "react";
import NavigationBar from "../components/NavigationBar";
import heroImageData from "../data/heroImageData";
import HeroImage from "../components/Services/HeroImage";
import Footer from "../components/Footer";
import ServiceCardButton from "../components/Services/ServiceCardButton";
import photographyData from "../data/photographyData";
import ServiceCard from "../components/Services/ServiceCard";

const Decoration = () => {
  return (
    <>
      {/*navbar*/}
      <NavigationBar />

      {/*main section*/}
      {heroImageData.map(
        (data, index) => index === 2 && <HeroImage key={index} data={data} />
      )}

      {/*cards*/}
      <div className="abcd">
        <div className="wrapper">
          {photographyData.map((service, index) => (
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
export default Decoration;
