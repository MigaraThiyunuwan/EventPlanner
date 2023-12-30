import React from "react";

const ServiceCardButton = () => {
  return (
    <div className="hehe">
      <div className="flex justify-end">
        <a
          href="#"
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Skip
        </a>

        <a
          href="#"
          className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Next
        </a>
      </div>
    </div>
  );
};
export default ServiceCardButton;
