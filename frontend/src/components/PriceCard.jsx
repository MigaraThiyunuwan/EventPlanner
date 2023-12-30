import React from "react";

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
        <a
          href="#"
          class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Skip
        </a>

        <a
          href="#"
          class="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Next
        </a>
      </div>
    </div>
  </div>
    
  );
}

export default PriceCard;
