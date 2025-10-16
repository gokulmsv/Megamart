import React, { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
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
          <HashLink smooth to="/#slider">Home</HashLink>
          <HashLink smooth to="/#content">Content</HashLink>
          <HashLink smooth to="/#product">Product</HashLink>
          <HashLink smooth to="/#brand">Brand</HashLink>
          <HashLink smooth to="/#footer">Contact</HashLink>
          <Link to="/collection">Collection</Link>
          <Link to="/cart">Cart</Link>
        </div>

        {/* Icons Section */}
        <div className="flex gap-3 text-gray-700">
          <IoSearchSharp className="text-2xl cursor-pointer" />
          <Link to="/cart">
            <MdShoppingCartCheckout className="text-2xl cursor-pointer" />
          </Link>
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
