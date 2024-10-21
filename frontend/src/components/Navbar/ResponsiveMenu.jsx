import React from "react";
import { MenuLinks } from "./Navbar";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu, toggleMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "left-[-100%]"}
    fixed bottom-0 top-0 w-[75%] transition-all duration-300 
    shadow-md pt-16 px-8 bg-white text-black dark:text-white dark:bg-gray-900 z-50 flex flex-col justify-between pb-4`}
    >
      <div className="card">
         {/* User section */}
        <div className="flex items-center justify-center">
          <a href="/"><FaHome size={40} /></a>
        </div>
        {/* Menu Section */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl text-center">
            {MenuLinks.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <Link
                    to={link}
                    className="mb-5 inline-block"
                    onClick={toggleMenu}  // This will close the menu on click
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Footer section */}
      <div>
        <h1>
          Made with ❤️ by{" "}
          <a href="https://github.com/shail-27-singh-28">Shailesh Singh</a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
