import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div>
        <h1
          data-aos="fade-up"
          className="text-center font-semibold uppercase pt-12 text-4xl md:text-5xl dark:text-white dark:bg-gray-900"
        >
          Contact Us
        </h1>
      </div>
      <section className="flex justify-center items-center dark:bg-gray-900 bg-white h-auto py-10 md:h-[70vh]">
        <div className="border-2 border-gray-500 flex flex-col md:flex-row bg-white rounded-lg shadow-lg max-w-6xl w-full overflow-hidden">
          {/* Left Column */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex-1 p-6 dark:text-white dark:bg-gray-500 text-center"
          >
            <div className="flex items-center justify-center mt-8">
              <a href="https://www.map.com">
                <FaMapMarkerAlt
                  className="text-3xl sm:text-2xl hover:text-black hover:animate-pulse duration-300"
                />
              </a>
            </div>
            <h2 className="mt-4 text-2xl sm:text-xl">Location</h2>
            <p className="mt-2">
              <a href="https://www.map.com">
                214 Mukand Nagar, P.L. Lokhande Marg, Chembur, Mumbai, Maharashtra
                400089
              </a>
            </p>

            <div className="flex items-center justify-center mt-12">
              <a
                data-aos="fade-up"
                data-aos-delay="600"
                href="mailto:shashankstructuralrepair@gamil.com"
              >
                <FaEnvelope
                  className="text-3xl sm:text-2xl hover:text-black hover:animate-ping duration-300"
                />
              </a>
            </div>
            <h2 className="mt-4 text-2xl sm:text-xl">Email</h2>
            <p className="dark:hover:text-gray-200 hover:text-blue-500 mt-2">
              <a href="mailto:shashankstructuralrepair@gamil.com">
                shashankstructuralrepair@gamil.com
              </a>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex justify-center items-center dark:text-white dark:bg-gray-500 p-5">
            <h1 className="text-2xl sm:text-xl">Work in progress</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
