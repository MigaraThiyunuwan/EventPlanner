import React, { useEffect, useState } from "react";
import PriceCard from "../components/PriceCard";
import NewNav from "../components/NewNav";
import Footer from "../components/Footer";
import { Button, Tooltip } from "flowbite-react";
import heroImageData from "../data/heroImageData";
import musicData from "../data/musicData";
import HeroImage from "../components/Services/HeroImage";
import ServiceCard from "../components/Services/ServiceCard";
import ServiceCardButton from "../components/Services/ServiceCardButton";
import { useLocation, useNavigate } from "react-router-dom";

function Music() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [selectedPackage, setSelectedPackage] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/product?productType=MU")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <NewNav />

      {/*main section*/}
      {heroImageData.map(
        (data, index) => index === 3 && <HeroImage key={index} data={data} />
      )}

      {/*cards*/}
      <div className="abcd">
        <div className="wrapper">
          {data.map((service) => (
            <ServiceCard
              key={service.id}
              data={service}
              onSelect={() => {
                if (selectedPackage === service) {
                  setSelectedPackage(null);
                } else {
                  setSelectedPackage(service);
                }
              }}
              selected={selectedPackage === service}
            />
          ))}
        </div>
        <ServiceCardButton
          onNext={() => {
            if (selectedPackage) {
              navigate("/catering", {
                state: {
                  music: selectedPackage ,
                  ...state
                },
              });
            }
          }}
          onSkip={() => {
            navigate("/catering", {
              state: { music: undefined , ...state },
            });
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Music;
