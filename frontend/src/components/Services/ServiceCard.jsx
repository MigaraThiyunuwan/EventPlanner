import React from "react";

const serviceCard = ({ data }) => {
  return (
    <div className="pricing-table gprice-single">
      <div className="head">
        <h4 className="title">{data.title}</h4>
      </div>
      <div className="content">
        <div className="price">
          <h1>{data.price}</h1>
        </div>
        <ul>
          {data.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <div className="sign-up">
          <a href="#" className="btn bordered radius">
            Signup Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default serviceCard;
