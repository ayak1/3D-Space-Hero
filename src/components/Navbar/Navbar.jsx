import React, { useState } from "react";
import { IoRocketOutline } from "react-icons/io5";
import { HiSquares2X2 } from "react-icons/hi2";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Navbar section */}
      <nav className="bg-primary text-white relative z-50 py-6">
        <div data-aos="fade" className="container flex justify-between items-center">
          <div className="flex items-center justify-center gap-2">
            <IoRocketOutline className="w-[30px] h-[30px]" />
            <h1 className="text-3xl font-semibold ">Space</h1>
          </div>
          <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-lg">
            <li className="hover:text-yellow-400 transition-colors duration-200">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200">
              <a href="#">Features</a>
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200">
              <a href="#">Contact Us</a>
            </li>
            <li>
              <button className="border border-white rounded-full py-2 px-6 hover:bg-secondary hover:border-secondary hover:border-transparent hover:shadow-custom-inset transition-all duration-500">
                Login
              </button>
            </li>
          </ul>
          <div className="flex md:hidden">
            <button onClick={toggleMenu}>
              <HiSquares2X2 className="text-3xl" />
            </button>
          </div>
        </div>
      </nav>
      {/* mobile menu section */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
