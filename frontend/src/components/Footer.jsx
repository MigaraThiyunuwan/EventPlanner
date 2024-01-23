import React from "react";
import Logo from "../images/logo_trans.png";
import { Icons } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const Services = [
    { name: "Catering", link: "" },
    { name: "Photography", link: "" },
    { name: "Entertainment", link: "" },
    { name: "Decorations", link: "" },
  ];
  const QuickLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "" },
    { name: "Potfolio", link: "portfolio" },
    { name: "Contact", link: "contactus" },
  ];
  const SocialMedia = [
    {
      icon: <FaPhoneAlt size={20} />,
      title: "025-2341234",
      link: "",
    },
    {
      icon: <MdEmail size={20} />,
      title: "Email",
      link: "",
    },
    {
      icon: <FaFacebook size={20} />,
      title: "Facebook",
      link: "",
    },
    {
      icon: <FaInstagram size={20} />,
      title: "Instagram",
      link: "",
    },
  ];

  return (
    <footer className="bg-secondary text-gray-800">
      <div className="footerContent grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        {/*logo*/}
        <div>
          <img src={Logo} alt="BlissHub Logo" className="max-w-full max-h-10" />
        </div>

        {/*links*/}
        <div>
          <ul>
            <h1 className="footerText mb-2 text-lg font-semibold uppercase">
              Quick Links
            </h1>
            {QuickLinks.map((link) => (
              <li key={link.name}>
                <a
                  className="footerText text-gray-500 py-3 hover:text-primary duration-300 text-sm cursor-pointer leading-6"
                  href={link.link}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/*services*/}
        <div>
          <ul>
            <h1 className="footerText mb-2 text-lg font-semibold">SERVICES</h1>
            {Services.map((service) => (
              <li key={service.name}>
                <a
                  className="footerText text-gray-500 py-3 hover:text-primary duration-300
          text-sm cursor-pointer leading-6"
                  href={service.link}
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/*contact*/}
        <div>
          <ul>
            <h1 className="footerText mb-2 font-semibold uppercase text-lg">
              Contact Us
            </h1>
            {SocialMedia.map((link) => (
              <li key={link.name}>
                <div className="flex justify-start">
                  <a
                    className="footerText text-gray-500 font-semibold py-2 hover:text-primary duration-300 cursor-pointer leading-6"
                    href={link.link}
                  >
                    {link.icon}
                  </a>
                  <a
                    className="footerText text-gray-500 ml-4 my-1 pt-1 hover:text-primary duration-300
          text-sm cursor-pointer leading-6"
                    href={link.link}
                  >
                    {link.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*social icons*/}
      <div className="text-center pt-2 text-gray-500 text-sm pb-8">
        <span>© 2023 BlissHub. All rights reserved.</span>
      </div>
    </footer>
  );
};
export default Footer;
