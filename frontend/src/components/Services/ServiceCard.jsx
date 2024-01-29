import React from "react";

const serviceCard = ({ data, selected, onSelect }) => {
  return (
    <div className={`pricing-table gprice-single ${selected ? 'border border-primary' : ''}`}>
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
          <button onClick={onSelect} className={`btn bordered radius`}>
            {selected ?  "Cancel" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default serviceCard;
