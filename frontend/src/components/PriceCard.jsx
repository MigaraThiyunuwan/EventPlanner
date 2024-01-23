import React from "react";

function PriceCard(props) {
  return (
    <div className="abcd">
      <div className="wrapper">
        <div className="pricing-table">
          <div className="head">
            <h4 className="title">{props.title}</h4>
          </div>
          <div className="content">
            <div className="price">
              <h1>Rs. {props.price}</h1>
            </div>
            {props.children}
            <div className="sign-up">
              <a href="#" className="btn bordered radius">
                Take Package
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
