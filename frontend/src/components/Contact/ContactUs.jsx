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
                <FaMapMarkerAlt className="text-3xl sm:text-2xl hover:text-black hover:animate-pulse duration-300" />
              </a>
            </div>
            <h2 className="mt-4 text-2xl sm:text-xl">Location</h2>
            <p className="mt-2 w-3/5 mx-auto">
              <a href="https://www.map.com">
                214 Mukand Nagar, P.L. Lokhande Marg, Chembur, Mumbai,
                Maharashtra 400089
              </a>
            </p>

            <div className="flex items-center justify-center mt-20">
              <a
                data-aos="fade-up"
                data-aos-delay="600"
                href="mailto:shashankstructuralrepair@gamil.com"
              >
                <FaEnvelope className="text-3xl sm:text-2xl hover:text-black hover:animate-ping duration-300" />
              </a>
            </div>
            <h2 className="mt-4 text-2xl sm:text-xl">Email</h2>
            <p className="dark:hover:text-gray-200 hover:text-blue-500 mt-2">
              <a href="mailto:shashankstructuralrepair@gamil.com">
                shashankstructuralrepair@gamil.com
              </a>
            </p>
          </div>

          {/* Vertical Separator */}
          <div className="w-px h-[400px] mt-5 bg-gray-500 hidden md:block dark:bg-gray-100"></div>

          {/* Right Column */}
          <div className="flex-1 flex justify-center items-center dark:text-white dark:bg-gray-500 p-5">
            <iframe data-aos="zoom-in"
              data-aos-delay="300"
              className="rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.987602578494!2d72.8995991850282!3d19.064282686081683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c621fffd2015%3A0x76a65fb71ca5dcb8!2sMukund%20Nagar%2C%20Chembur%20West%2C%20Rahul%20Nagar%2C%20Chedda%20Nagar%2C%20Mumbai%2C%20Maharashtra%20400089!5e0!3m2!1sen!2sin!4v1729710820640!5m2!1sen!2sin"
              width="500"
              height="400"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
