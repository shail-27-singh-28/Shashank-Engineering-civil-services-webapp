import React from "react";
// import HomeImg from "../../assets/images/aboutImage.png";
import background from "../../assets/Video/backgroundvid.mp4";
import BrandLogo from "../BrandLogo/BrandLogo";
import Services from "../Services/Services";
import AboutSlider from "../AboutSlider/AboutSlider";
import Project from "../Project/ProjectComp";

const Home = () => {
  return (
    <>
      <main
        className="bg-white dark:bg-gray-900 dark:text-white 
      duration-300"
      >
        <div className="relative h-[91vh] overflow-hidden flex justify-center items-center ">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z--1"
          >
            <source src={background} type="video/mp4" />
          </video>
          <div className="container min-h-[620px] flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
              {/* Image section */}
              <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
                {/* <img src={HomeImg} alt="" className="rounded-xl" /> */}
                {/* <div 
              data-aos="slide-right"
              data-aos-delay="300"
              className="bg-white dark:bg-gray-900 px-4 py-2 rounded-xl shadow-md absolute -bottom-5 right-0 sm:-right-8">
                <p>⭐ projects</p>
                <h1 className="font-bold">
                  100+ <span className="font-normal">Done</span>
                </h1>
              </div> */}
              </div>
              {/* Text content section */}
              <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
                <h1
                  data-aos="fade-up"
                  className="text-4xl sm:text-5xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                >
                 Shashank Engineering civil services
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="text-xl italic font-semibold text-gray-900 dark:text-white"
                >
                  Innovative Architecture Design Meets Efficient Building
                  Maintenance. Seamless Integration of Design and Maintenance in
                  Modern Architecture Sustainable Building Solutions: Balancing
                  Design and Maintenance.
                </p>
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="btn-primary transition-all duration-300"
                >
                  Get Started
                </button>
                <div
                  data-aos="slide-right"
                  data-aos-delay="300"
                  className="bg-white animate-bounce dark:bg-gray-900 px-7 py-2 rounded-xl shadow-md absolute bottom-3 right-3 cursor-pointer"
                >
                  <p>⭐ projects</p>
                  <h1 className="font-bold">
                    100+ <span className="font-normal">Done</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BrandLogo />
      <Services />
      <AboutSlider />
      <Project />
    </>
  );
};

export default Home;
