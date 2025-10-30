import React, { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaHeart } from "react-icons/fa";
import { UserAuth } from "../Context/AuthContext";

const Header = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <>
      {/* Header Bar */}
      <div className="flex justify-between items-center px-4 py-3 shadow-md bg-white">
        <h1 className="font-poppins text-2xl font-semibold text-gray-800">
          Megamart
        </h1>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-6 font-poppins text-gray-700">
          <HashLink smooth to="/">Home</HashLink>
          <HashLink smooth to="/#content">New Arrivals</HashLink>
          <HashLink smooth to="/#product">Product</HashLink>
          <HashLink smooth to="/#brand">Brand</HashLink>
          <HashLink smooth to="/#contact">Contact</HashLink>
          <Link to="/collection">Collection</Link>
        </div>

        {/* Icons + Auth Section */}
        <div className="relative flex items-center gap-3 text-gray-700">
          <Link to="/wishlist"><FaHeart size={24}/></Link>
          <Link to="/cart" className="relative">
            <MdShoppingCartCheckout className="text-2xl cursor-pointer" />
            {cartItems.length > 0 && (
              <span className="absolute -top-3 -right-3 text-sm bg-red-500 text-white rounded-full px-1.5">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* If user logged in → show name + logout */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-800">
                {user.displayName || user.email.split("@")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 h-8 px-3 rounded-lg text-white text-sm hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            // If not logged in → show Signin button
            <button className="hidden md:block bg-teal-700 h-8 w-20 ml-8 rounded-lg text-white hover:bg-teal-800">
              <Link to="/Login">Signin</Link>
            </button>
          )}

          {/* Menu Icon (Mobile) */}
          <RiBarChartHorizontalLine
            className="text-2xl md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;
