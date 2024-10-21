import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logoshashank.png";
import DarkMode from "./DarkMode";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Contact Us",
    link: "/contact",
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
  },
  {
    id: 4,
    name: "Projects",
    link: "/project",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="bg-[#0B1E59] dark:bg-black dark:text-white text-white h-20 duration-300">
        <div className="container py-3 md:py-2">
          <div className="flex justify-between">
            {/* logo section */}
            <div>
              <a href="/" className="flex items-center gap-5">
                <img src={Logo} alt="Logo" className="w-30 h-16" />
              </a>
            </div>
            {/* NavLink Section */}
            <div className="hidden md:block">
              <ul className="flex items-center mt-4 gap-14">
                {MenuLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id}>
                      <Link
                        to={link}
                        className="text-xl font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-300"
                      >
                        {name}
                      </Link>
                    </li>
                  );
                })}
                <DarkMode />
              </ul>
            </div>
            {/* Mobile View */}
            <div className="flex items-center gap-4 md:hidden">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl"
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer text-2xl"
                />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
