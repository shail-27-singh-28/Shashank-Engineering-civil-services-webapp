import React from "react";
import aboutUsImage from "../../assets/images/aboutImage.png";

const About = () => {
  return (
    <>
      <section className="flex justify-center items-center dark:bg-gray-900 bg-white min-h-screen py-10">
        <div className="border-2 border-blue-500 flex flex-col md:flex-row bg-white rounded-lg shadow-lg max-w-6xl w-full overflow-hidden">
          
          {/* Text Section */}
          <div className="flex-1 p-4 dark:text-white dark:bg-gray-500">
            <h1 data-aos="fade-up" className="text-center text-4xl md:text-5xl mb-5">
              About Us
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="text-center text-base md:text-lg leading-relaxed mb-5">
              Shashank Enginee Civil Services is a leading turnkey provider in
              structural strengthening repairs and retrofitting of all types of
              civil engineering structures. Our key services include:
            </p>

            {/* Service List */}
            <ul className="list-none pl-5">
              <li data-aos="fade-up" data-aos-delay="300" className="relative ml-5 mb-2 before:content-['💠'] before:left-0 before:text-yellow-500 before:text-lg">
                Structural Repair & strengthening.
              </li>
              <li data-aos="fade-up" data-aos-delay="600" className="relative ml-5 mb-2 before:content-['💠'] before:left-0 before:text-yellow-500 before:text-lg">
                Corrosion study & Cathodic protection.
              </li>
              <li data-aos="fade-up" data-aos-delay="900" className="relative ml-5 mb-2 before:content-['💠'] before:left-0 before:text-yellow-500 before:text-lg">
                Retrofitting and Jacketing.
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex-1 flex justify-center items-center dark:bg-gray-500 p-5"
          >
            <img
              src={aboutUsImage}
              alt="About us"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
