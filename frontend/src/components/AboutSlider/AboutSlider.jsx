import React from "react";
import Slider from "react-slick";
import abhinandanimg from "../../assets/images/abhinandan.jpg";
import dwakrikaimg from "../../assets/images/dwarika.jpg";
import shivimg from "../../assets/images/shiv.jpg";

const aboutsliderData = [
  {
    id: 1,
    name: "Er. Abhinandan Parjapati - Managing Director (B.E Civil Engineer)",
    text: "The Managing Director (Civil Engineer) leads civil engineering projects, overseeing strategic planning, project execution, and team management to ensure successful outcomes and compliance with industry standards.",
    mobileno: "Mobile No: +91 9561838950",
    experience: "Experience: 18+ Years of Experience",
    img: abhinandanimg,
  },
  {
    id: 1,
    name: "Er. Dwarika Prajapati - Project Management (Diploma Civil Engineer)",
    text: "The Project Manager (Civil Engineer) oversees the planning and execution of civil engineering projects, ensuring they are completed on time, within budget, and to quality standards.",
    mobileno: "Mobile No: +91 9559302776",
    experience: "Experience: 12+ Years of Experience",
    img: dwakrikaimg,
  },
  {
    id: 1,
    name: "Er. Shivkumar Prajapati - Civil Structures (B.tech Civil Enigineer)",
    text: "A Civil Structural Engineer designs and analyzes structures to ensure safety, stability, and sustainability while collaborating with other engineering professionals.",
    mobileno: "Mobile No: +91 9919460553",
    experience: "Experience: 5+ Years of Experience",
    img: shivimg,
  },
];

const AboutSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10 dark:text-white">
        <div data-aos="fade-up" className="container">
          {/* aboutslider section */}
          <div
            className="grid grid-cols-1 max-w-screen-xl
           mx-auto gap-6"
          >
            <Slider {...settings}>
              {aboutsliderData.map(
                ({ id, name, text, mobileno, img, experience }) => (
                  <div key={id} className="my-6">
                    <div
                      className="flex flex-col sm:flex-row
                   gap-5 md:gap-14 p-4 mx-4 rounded-xl
                    dark:bg-gray-800 relative"
                    >
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full
                      sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <h1 className="text-xl font-bold">{name}</h1>

                        <a
                          href="tel:+91 9561838950"
                          className="text-black/80 
                      dark:text-blue-500  xl:pr-40 font-semibold text-blue-800"
                        >
                          {mobileno}
                        </a>
                        <p
                          className="text-gray-500  
                    dark:text-white/80 xl:pr-40"
                        >
                          {experience}
                        </p>
                        <p
                          className="text-gray-500
                    dark:text-white/80 xl:pr-40"
                        >
                          {text}
                        </p>
                      </div>
                      <p
                        className="text-black/10 text-[12rem]
                     font-serif absolute bottom-0 right-0"
                      >
                        ,,
                      </p>
                    </div>
                  </div>
                )
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSlider;
