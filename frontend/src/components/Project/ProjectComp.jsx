import React, { useState } from "react";
import BlogCard from "./ProjectCard";
import Img1 from "../../assets/BlogsImg/Img1.jpg";
import Img2 from "../../assets/BlogsImg/Img2.jpg";
import Img3 from "../../assets/BlogsImg/Img3.jpg";
import Img4 from "../../assets/BlogsImg/Img4.jpg";
import Img5 from "../../assets/BlogsImg/Img5.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "GP2 Grouting on padastal Top",
    description:
      "Location: Mukhand Bajaj Ltd Kalva Thana Maharastra.",
    author: "Abhinandan Parjapati",
    date: "April-01-2022",
    aosDelay: "0",
  },
  {
    id: 2,
    image: Img2,
    title: "Scaffolding Eracation",
    description:
      "Location: Sika pvt Ltd Navi Mumbai Maharastra.",
    author: "Abhinandan Parjapati",
    date: "April-01-2022",
    aosDelay: "300",
  },
  {
    id: 3,
    image: Img3,
    title: "Retrofitting work",
    description:
      "Location: Mukhand Bajaj Ltd Kalva Thana Maharastra.",
    author: "Abhinandan Parjapati",
    date: "April-01-2022",
    aosDelay: "500",
  },
  {
    id: 4,
    image: Img4,
    title: "Interial work (Granite, Painting and lighting)",
    description:
      "Location: Mukhand Bajaj Ltd Kalva Thana Maharastra.",
    author: "Abhinandan Parjapati",
    date: "April-01-2022",
    aosDelay: "300",
  },
  {
    id: 5,
    image: Img5,
    title: "structural repair",
    description:
      "Location: Bandra mumbai Maharastra.",
    author: "Abhinandan Parjapati",
    date: "April-01-2022",
    aosDelay: "500",
  },
  {
    id: 6,
    image: Img1,
    title: "Interial work (Granite, Painting and lighting)",
    description:
      "Location: Mukhand Bajaj Ltd Kalva Thana Maharastra.",
    author: "Abhinandan Parjapati",
    date: "April-01-2022",
    aosDelay: "700",
  },
  {
    id: 7,
    image: Img2,
    title: "Interial work (Granite, Painting and lighting)",
    description:
      "Location: Mukhand Bajaj Ltd Kalva Thana Maharastra.",
    author: "Abhinandan Parjapati",
    date: "April-01-2022",
    aosDelay: "300",
  },
];

const BlogsComp = () => {
  const [showAll, setShowAll] = useState(false);
  const blogsToShow = showAll ? BlogsData : BlogsData.slice(0, 3);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
      <div className="container">
        <h1 
          data-aos="fade-up"
          className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
          Projects
        </h1>
        {/* Blogs card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsToShow.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
        <div data-aos="fade-up" data-aos-offset="0" className="text-center">
          <button 
            className="btn-primary" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Posts"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
