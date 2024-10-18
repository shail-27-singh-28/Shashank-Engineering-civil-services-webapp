import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "./components/Blogs/Blog.jsx";
import BlogsComp from "./components/BlogsComp/BlogsComp.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black duration-300">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<BlogsComp />} />
          
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
