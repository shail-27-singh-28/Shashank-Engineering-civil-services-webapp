import React, { useState } from "react";
import { FaBuilding, FaCameraRetro, } from "react-icons/fa";
import { GiConcreteBag, GiNotebook } from "react-icons/gi";
import { PiBuildingsThin } from "react-icons/pi";
import { CiAlignBottom } from "react-icons/ci";
import { FaCloudShowersWater } from "react-icons/fa6";
import { MdChangeCircle } from "react-icons/md";
import { TbCircuitGround } from "react-icons/tb";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { SiCapacitor } from "react-icons/si";
import { SiAffinitydesigner } from "react-icons/si";


const skillsData = [
  {
    name: "Building Civil Repair",
    icon: <FaBuilding className="text-4xl text-primary" />,
    link: "#",
    description:
      "Building civil repair involves restoring and maintaining structural components to ensure safety and durability.",
    aosDelay: "0",
  },
  {
    name: "Building Strengthening",
    icon: <PiBuildingsThin className="text-4xl text-primary" />,
    link: "#",
    description:
      "Building Strengthening in civil engineering refers to enhancing the load-carrying capacity and stability of a structure to improve its performance and extend its lifespan.",
    aosDelay: "300",
  },
  {
    name: "Retrofitting of RCC Member",
    icon: <CiAlignBottom className="text-4xl text-primary" />,
    link: "#",
    description:
      "Retrofitting of RCC members strengthens and upgrades concrete structures to meet modern safety and performance standards.",
    aosDelay: "500",
  },
  {
    name: "Hilti anchoring",
    icon: <GiConcreteBag className="text-4xl text-primary" />,
    link: "#",
    description:
      "Hilti anchoring in civil engineering refers to the use of Hilti systems for securely fastening structural elements to concrete or masonry.",
    aosDelay: "700",
  },
  {
    name: "Waterproofing",
    icon: <FaCloudShowersWater className="text-4xl text-primary" />,
    link: "#",
    description:
      "Waterproofing in civil engineering involves applying materials or techniques to prevent water penetration and protect structures from moisture damage.",
    aosDelay: "0",
  },
  {
    name: "Core Cutting",
    icon: <MdChangeCircle className="text-4xl text-primary" />,
    link: "#",
    description:
      "Core cutting in civil engineering involves drilling precise cylindrical holes through concrete or masonry for utility installations or structural modifications.",
    aosDelay: "300",
  },
  {
    name: "Leak Proof injection Grouting",
    icon: <TbCircuitGround className="text-4xl text-primary" />,
    link: "#",
    description:
      "Leak-proof injection grouting in civil engineering is a method used to seal cracks and voids in structures by injecting a specialized grout to prevent water infiltration.",
    aosDelay: "500",
  },
  {
    name: "Estimating",
    icon: <FaFileInvoiceDollar className="text-4xl text-primary" />,
    link: "#",
    description:
      "Estimating in civil engineering involves calculating costs, quantities, and resources for construction projects to ensure accurate budgeting and planning.",
    aosDelay: "700",
  },
  {
    name: "RCC Jacketing for Additional Load",
    icon: <SiCapacitor className="text-4xl text-primary" />,
    link: "#",
    description:
      "RCC jacketing for additional load involves encasing existing concrete members with new concrete and reinforcement to increase their load-bearing capacity.",
    aosDelay: "0",
  },
  {
    name: "Fabrication works",
    icon: <SiAffinitydesigner className="text-4xl text-primary" />,
    link: "#",
    description:
      "Fabrication works in civil engineering entail manufacturing and assembling structural components to meet design specifications.",
    aosDelay: "300",
  }
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skillsData : skillsData.slice(0, 4);
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
            {visibleSkills.map((skill) => (
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
            <button 
            className="btn-primary" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Learn more"}
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
