import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Structural Repair & Strengthening",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "Structural repair restores damage, while strengthening improves a structure's capacity to ensure safety and longevity.",
    aosDelay: "0",
  },
  {
    name: "corrosion study & cathodic protection",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "Corrosion studies analyze material degradation, while cathodic protection prevents it by making metal surfaces the cathode in an electrochemical cell.",
    aosDelay: "300",
  },
  {
    name: "Retrofitting & Jacketing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Retrofitting involves strengthening or upgrading existing structures, while jacketing is a specific technique used to reinforce columns or beams by encasing them in additional material.",
    aosDelay: "500",
  },
  {
    name: "Retrofitting & Jacketing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur aditi nscbs sdjbhvf fdjbsjn fdjsb njfb fdjb",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-black dark:text-white 
      py-12 sm:grid sm:place-items-center"
      >
        <div className="container">
          {/* Header section */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold
             text-yellow-500 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              We provide comprehensive civil engineering services, including
              structural design, transportation planning, water resource
              management, and geotechnical analysis. Our focus is on delivering
              sustainable, efficient, and innovative solutions for
              infrastructure development.
            </p>
          </div>
          {/* Card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                key={skill.name}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
          {/* button section */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
