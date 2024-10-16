import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Features",
    link: "/#features",
  },
  {
    title: "Works",
    link: "/#works",
  },
  {
    title: "Career",
    link: "/#career",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Delivery Detailes",
    link: "/#delivery-details",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privacy Policy",
    link: "/#privacy",
  },
];
const ResourcesLinks = [
    {
      title: "Resources",
      link: "/#resources",
    },
    {
      title: "Resources2",
      link: "/#resources2",
    },
    {
      title: "Resources3",
      link: "/#resources3",
    },
];
const Footer = () => {
  return (
    <>
      <div className="bg-black/95 text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 py-5">
            {/* Company Details */}
            <div className="py-8 px-4">
              <h1
                className="sm:text-3xl text-xl font-bold
                     sm:text-left text-justify mb-3 flex items-center gap-3"
              >
                Shashank Engineering Civil Services
              </h1>
              <p>
              Revolutionary architecture combines smart design with easy maintenance for sustainable buildings.{" "}
              </p>
              <br />
              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                <a href="https://www.instagram.com">
                  <FaInstagram
                    className="text-2xl
                     hover:text-primary hover:animate-spin duration-300"
                  />
                </a>
                <a href="https://www.facebook.com">
                  <FaFacebook
                    className="text-2xl
                     hover:text-primary hover:animate-pulse duration-300"
                  />
                </a>
                <a href="https://www.linkedin.com">
                  <FaLinkedinIn
                    className="text-2xl
                     hover:text-primary hover:animate-bounce duration-300"
                  />
                </a>
                <a href="mailto:shashankstructuralrepair@gamil.com">
                  <FaEnvelope
                    className="text-2xl
                     hover:text-primary hover:animate-ping duration-300"
                  />
                </a>
                <a href="https://api.whatsapp.com/send?phone=9561838950">
                  <FaWhatsapp
                    className="text-2xl
                     hover:text-primary hover:animate-pulse duration-300"
                  />
                </a>
              </div>
            </div>
            {/* Link section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 
            col-span-2 md:pl-10">
                {/* First col */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">
                    Company</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 
                        duration-300 hover:text-primary
                        space-x-1 text-gray-400"
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Second col */}
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">
                    Help</h1>
                  <ul className="space-y-3">
                    {HelpLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 
                        duration-300 hover:text-primary
                        space-x-1 text-gray-400"
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
               {/* third col */}
               <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">
                    Resources</h1>
                  <ul className="space-y-3">
                    {ResourcesLinks.map((link) => (
                      <li
                        key={link.title}
                        className="cursor-pointer hover:translate-x-1 
                        duration-300 hover:text-primary
                        space-x-1 text-gray-400"
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
