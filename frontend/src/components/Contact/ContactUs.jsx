import React from "react";
import {
  FaEnvelope,
  FaEvernote,
  FaLocationArrow,
  FaMap,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaSearchLocation,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <h1 data-aos="fade-up" className="text-center pt-12 text-5xl dark:text-white dark:bg-gray-900">Conatct Us</h1>
      <section className="flex justify-center items-center dark:bg-gray-900 bg-white h-[70vh] py-10">
        <div className="border-2 border-gray-500 flex flex-col md:flex-row bg-white rounded-lg shadow-lg max-w-6xl w-full overflow-hidden">
          <div data-aos="fade-up" data-aos-delay="300" className="flex-1 p-4 dark:text-white dark:bg-gray-500">
            <div className="flex items-center justify-center mt-10">
              <a href="https://www.map.com">
                <FaMapMarkerAlt
                  className="text-2xl
                     hover:text-black hover:animate-pulse duration-300"
                />
              </a>
            </div>
            <div className="w-[50%] mx-auto text-center mt-2">
              <h2 className="text-center mt-2 text-2xl">Location</h2>
            </div>
            <div className="w-[50%] mx-auto text-center mt-2">
              <a href="https://www.map.com">
                214 Mukand Nagar, P.L. Lokhande Marg, Chembur, Mumbai,
                Maharashtra 400089
              </a>
            </div>
            <div className="flex items-center justify-center mt-16">
              <a  data-aos="fade-up" data-aos-delay="600" href="mailto:shashankstructuralrepair@gamil.com">
                <FaEnvelope
                  className="text-2xl
                     hover:text-black hover:animate-ping duration-300"
                />
              </a>
            </div>
            <div  data-aos="fade-up" data-aos-delay="600" className="w-[50%] mx-auto text-center mt-2 mb-10">
              <a href="mailto:shashankstructuralrepair@gamil.com">
              <h2 className="text-center mt-2 text-2xl">Email</h2>
                <p className="dark:hover:text-gray-200 hover:text-blue-500 mt-2">
                  shashankstructuralrepair@gamil.com
                </p>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center dark:text-white dark:bg-gray-500 p-5">
            <h1>Work in progress</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
