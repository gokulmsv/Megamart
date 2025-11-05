import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {menuOpen && (
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          exit={{ x: -250 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6 font-poppins text-gray-700"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="text-right text-lg font-semibold text-gray-500 mb-4"
          >
            ✕ Close
          </button>

          {/* Single Page Scroll Links */}
          <HashLink
            smooth
            to="/#slider"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Home
          </HashLink>
          <HashLink
            smooth
            to="/#content"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            New Arrivals
          </HashLink>
          <HashLink
            smooth
            to="/#product"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Product
          </HashLink>
          <HashLink
            smooth
            to="/#brand"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Brand
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Contact
          </HashLink>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-600"
          >
            Login
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
