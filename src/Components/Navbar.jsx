import React from 'react'
import {motion} from "framer-motion"

const Navbar = ({menuOpen, setMenuOpen}) => {
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

          <a href="#slider" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</a>
          <a href="#content" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Content</a>
          <a href="#product" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Product</a>
          <a href="#brand" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Brand</a>
          <a href="#footer" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</a>
        </motion.div>
      )}
    </>
  )
}

export default Navbar