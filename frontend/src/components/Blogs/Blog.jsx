import React from "react";
import "./Blog.css";
import image1 from "../../assets/images/img1.jpg";
import image2 from "../../assets/images/img2.jpg";
import image3 from "../../assets/images/img3.jpg";
import image4 from "../../assets/images/img4.jpg";
import image5 from "../../assets/images/img5.jpg";
import image6 from "../../assets/images/img6.jpg";
import image7 from "../../assets/images/img7.jpg";
import image8 from "../../assets/images/img8.jpg";
import image9 from "../../assets/images/img9.jpg";
import image10 from "../../assets/images/img10.jpg";
import image11 from "../../assets/images/img11.jpg";
import image12 from "../../assets/images/img12.jpg";
import image13 from "../../assets/images/img13.jpg";
import image14 from "../../assets/images/img14.jpg";
import image15 from "../../assets/images/img15.jpg";
import image16 from "../../assets/images/img16.jpg";
import image17 from "../../assets/images/img17.jpg";
const Blog = () => {
  return (
    <div className="mainbody">
      <div>
        <h1 className="projecthead">Our Blogs</h1>
      </div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={image1} alt="image1" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image2} alt="image2" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image3} alt="image3" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image4} alt="image4" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image5} alt="image5" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image6} alt="image6" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image7} alt="image7" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image8} alt="image8" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image9} alt="image9" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image10} alt="image10" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image11} alt="image11" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image12} alt="image12" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image13} alt="image13" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image14} alt="image14" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image15} alt="image15" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image16} alt="image16" className="projectimg" />
          </div>
          <div className="slide">
            <img src={image17} alt="image17" className="projectimg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
