import React from "react";
import logo1 from "../../assets/BandLogo/11.png";
import logo2 from "../../assets/BandLogo/12.png";
import logo3 from "../../assets/BandLogo/13.png";
import logo4 from "../../assets/BandLogo/14.png";

const BrandLogo = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white">
        <div className="container pb-12 text-center space-y-3">
          <h1
          data-aos="fade-up"
          className="text-3xl font-semibold text-yellow-500 dark:text-primary">Powering next-gen companies</h1>
          <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap items-center justify-evenly gap-3 py-6 md:px-32 border-orange-50">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandLogo;
