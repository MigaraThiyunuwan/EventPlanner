import React, { useEffect, useState } from "react";
import heroImageData from "../data/heroImageData";
import HeroImage from "../components/Services/HeroImage";
import Footer from "../components/Footer";
import ServiceCardButton from "../components/Services/ServiceCardButton";
import ServiceCard from "../components/Services/ServiceCard";
import { useLocation, useNavigate } from "react-router-dom";
import NewNav from "../components/NewNav";

const Decoration = () => {
  const { state } = useLocation();

  console.log(state);

  const navigate = useNavigate();

  const [selectedPackage, setSelectedPackage] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/product?productType=PH")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {/*navbar*/}
      <NewNav/>

      {/*main section*/}
      {heroImageData.map(
        (data, index) => index === 2 && <HeroImage key={index} data={data} />
      )}

      {/*cards*/}
      <div className="abcd">
        <div className="wrapper">
          {data.map((service, index) => (
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
              navigate("/decoration", {
                state: {
                  photography: selectedPackage,

                  ...state,
                },
              });
            }
          }}
          onSkip={() => {
            navigate("/decoration", {
              state: {
                photography: undefined,
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
export default Decoration;
