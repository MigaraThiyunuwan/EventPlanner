import React from "react";
import { Button, Tooltip } from 'flowbite-react';
function PriceCard(props) {
  return (
    <div className="abcd">
      <div className="wrapper">
        <div className="pricing-table gprice-single">
          <div className="head">
            <h4 className="title">Basic</h4>
          </div>
          <div className="content">
            <div className="price">
              <h1>Rs. 15000</h1>
            </div>
            <ul>
              <li>5 GB Ram</li>
              <li>40GB SSD Cloud Storage</li>
              <li>Month Subscription</li>
              <li>Responsive Framework</li>
              <li>
                {" "}
                <del>Monthly Billing Software</del>{" "}
              </li>
              <li>
                {" "}
                <del>1 Free Website</del>
              </li>
            </ul>
            <div className="sign-up">
              <a href="#" className="btn bordered radius">
                Signup Now
              </a>
            </div>
          </div>
        </div>
        <div className="pricing-table gprice-single">
          <div className="head">
            <h4 className="title">Standard</h4>
          </div>
          <div className="content">
            <div className="price">
              <h1>$29</h1>
            </div>
            <ul>
              <li>5 GB Ram</li>
              <li>40GB SSD Cloud Storage</li>
              <li>Month Subscription</li>
              <li>Responsive Framework</li>
              <li>Monthly Billing Software</li>
              <li>
                <del>1 Free Website</del>
              </li>
            </ul>
            <div className="sign-up">
              <a href="#" className="btn bordered radius">
                Signup Now
              </a>
            </div>
          </div>
        </div>
        <div className="pricing-table gprice-single">
          <div className="head">
            <h4 className="title">Premium</h4>
          </div>
          <div className="content">
            <div className="price">
              <h1>$39</h1>
            </div>
            <ul>
              <li>5 GB Ram</li>
              <li>40GB SSD Cloud Storage</li>
              <li>Month Subscription</li>
              <li>Responsive Framework</li>
              <li>Monthly Billing Software</li>
              <li>1 Free Website</li>
            </ul>
            <div className="sign-up">
              <a href="#" className="btn bordered radius">
                Signup Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hehe">
        <div class="flex justify-end">
          <a href="#">
            <Tooltip content="Skip Current Page and Go Next Page" >
              <Button className="navbutton" style={{marginTop:30}}>Next</Button>
            </Tooltip>
          </a>
        </div>
      </div>
    </div>

  );
}

export default PriceCard;
