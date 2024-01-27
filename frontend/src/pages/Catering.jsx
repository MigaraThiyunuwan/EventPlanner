import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import heroImageData from "../data/heroImageData";
import HeroImage from "../components/Services/HeroImage";
import Footer from "../components/Footer";
import ServiceCardButton from "../components/Services/ServiceCardButton";
import cateringData from "../data/cateringData";
import ServiceCard from "../components/Services/ServiceCard";
import { useLocation, useNavigate } from "react-router-dom";

const Catering = () => {
  const { state } = useLocation();

  console.log(state);

  const navigate = useNavigate();

  const [selectedPackage, setSelectedPackage] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/product?productType=CA")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {/*navbar*/}
      <NavigationBar />

      {/*main section*/}
      {heroImageData.map(
        (data, index) => index === 0 && <HeroImage key={index} data={data} />
      )}

      {/*cards*/}
      <div className="abcd">
        <div className="wrapper">
          {data.map((service) => (
            <ServiceCard
              key={service.id}
              data={service}
              onSelect={() => setSelectedPackage(service)}
              selected={selectedPackage === service}
            />
          ))}
        </div>
        <ServiceCardButton
          onNext={() => {
            if (selectedPackage) {
              navigate("/photography", {
                state: {
                  catering: selectedPackage,

                  ...state,
                },
              });
            }
          }}
          onSkip={() => {
            navigate("/photography", {
              state: {
                catering: undefined,

                ...state,
              },
            });
          }}
        />
      </div>

      {/*footer*/}
      <Footer />
    </>
  );
};
export default Catering;
