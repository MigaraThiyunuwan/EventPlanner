import React, { useEffect, useState } from "react";
import heroImageData from "../data/heroImageData";
import HeroImage from "../components/Services/HeroImage";
import Footer from "../components/Footer";
import ServiceCard from "../components/Services/ServiceCard";
import { useLocation, useNavigate } from "react-router-dom";
import NewNav from "../components/NewNav";
import UseUser from "../components/UseUser";

const Decoration = () => {
  const { state } = useLocation();

  const user = UseUser();

  console.log(state);

  const navigate = useNavigate();

  const [selectedPackage, setSelectedPackage] = useState(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/product?productType=DE")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const onSubmit = () => {
    const req = {
      customer: user.id,
      products: [
        state.music?.id,
        state.catering?.id,
        state.photography?.id,
        selectedPackage.id,
      ],
      orderDate: state.date,
      total:
        parseFloat(state.music.price || 0) +
        parseFloat(state.music.catering || 0) +
        parseFloat(state.music.photography || 0) +
        parseFloat(selectedPackage.price || 0),
    };

    fetch("http://127.0.0.1:8000/api/order/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((data) => 
      {
        alert("Order placed!")
        navigate('/user_profile')
      }).catch(err => alert('Something went wrong. Please try again'))

   
  };

  return (
    <>
      {/*navbar*/}
      <NewNav/>

      {/*main section*/}
      {heroImageData.map(
        (data, index) => index === 1 && <HeroImage key={index} data={data} />
      )}

      {/*cards*/}
      <div className="abcd">
        <div className="wrapper">
          {data.map((service, index) => (
            <ServiceCard
              key={index}
              data={service}
              onSelect={() => setSelectedPackage(service)}
              selected={selectedPackage === service}
            />
          ))}
        </div>
        <div className="flex justify-end pr-16 pt-8">
          <button
            onClick={() => {
              if (selectedPackage) {
                onSubmit();
              } else {
                if (
                  window.confirm(
                    "Decoration package is not selected. Do you want to skip?"
                  ) === true
                ) {
                  onSubmit();
                }
              }
            }}
            className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>

      {/*footer*/}
      <Footer />
    </>
  );
};
export default Decoration;
