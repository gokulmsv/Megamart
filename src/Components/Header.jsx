import React, { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Bar */}
      <div className="flex justify-between items-center px-4 py-3 shadow-md bg-white">
        <h1 className="font-poppins text-2xl font-semibold text-gray-800">
          Megamart
        </h1>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-6 font-poppins text-gray-700">
          <a href="#slider" className="hover:text-blue-600">Home</a>
          <a href="#content" className="hover:text-blue-600">Content</a>
          <a href="#product" className="hover:text-blue-600">Product</a>
          <a href="#brand" className="hover:text-blue-600">Brand</a>
          <a href="#footer" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Icons Section */}
        <div className="flex gap-3 text-gray-700">
          <IoSearchSharp className="text-2xl cursor-pointer" />
          <MdShoppingCartCheckout className="text-2xl cursor-pointer" />

          {/* Mobile Menu Icon */}
          <RiBarChartHorizontalLine
            className="text-2xl md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Side Navbar (Mobile) */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;
