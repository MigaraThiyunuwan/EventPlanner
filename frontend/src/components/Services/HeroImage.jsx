import React from "react";

const HeroImage = ({ data }) => {
  return (
    <div className="relative h-96">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="h-full w-full bg-gradient-to-r from-white to-transparent opacity-70 flex flex-col justify-center items-start">
          <h1 className="text-primary uppercase text-3xl md:text-5xl font-bold max-w-2xl pt-4 pl-4 font-serif">
            {data.heading}
          </h1>
          <p className="text-gray-900 text-md md:text-md font-bold max-w-md pl-4 font-serif">
            {data.description}
          </p>
        </div>
      </div>
      <img
        src={data.image}
        alt="Catering Section"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
export default HeroImage;
