import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import BrandLogo from "./components/BrandLogo/BrandLogo.jsx";
import Services from "./components/Services/Services.jsx";
import AboutSlider from "./components/AboutSlider/AboutSlider.jsx";
import BlogsComp from "./components/BlogsComp/BlogsComp.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  },[]);
  return (
  <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
      <Navbar/>
      <Home />
      <BrandLogo />
      <Services />
      <AboutSlider />
      <BlogsComp />
      <Footer />
    </div>
    );
};

export default App;
