import React from "react";
import Men from "../assets/Men.jpeg";
import Women from "../assets/Women.jpeg";
import Cosmetics from "../assets/Cosmetics.jpeg";
import Accessories from "../assets/accessories.jpeg";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <section className="p-3 place-items-center grid grid-cols-1 gap-2 relative font-poppins md:grid md:grid-cols-2 lg:grid-cols-4">
        {/* <div className="bg-gray-800 w-full h-56 text-white">
          <img className="w-44 h-52 my-2 mx-52 rounded-xl md:w-36 lg:w-32" src={Men} alt="" />
          <h2 className="absolute top-10 p-5 text-2xl font-semibold">
            Men's Fashion
          </h2>
          <p className="absolute top-18 p-5 text-xl font-thin">340 Items</p>
          <p className="absolute top-32 p-2 ml-3 mt-7 text-xl cursor-pointer font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:origin-center after:scale-0 after:opacity-100 after:transition-transform after:duration-500 hover:after:scale-70 focus:after:scale-100">
           <Link to="/collection">Shop Now</Link> 
          </p>
        </div> */}
        <div className="bg-gray-800 w-full h-56 text-white flex items-center justify-between px-6">
          {/* LEFT SIDE TEXT */}
          <div>
            <h2 className="text-2xl font-semibold">Men's Fashion</h2>
            <p className="text-xl font-thin mt-2">340 Items</p>

            <Link
              to="/collection"
              className="text-xl font-semibold border-b-2 border-transparent hover:border-white transition"
            >
              Shop Now
            </Link>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <img className="w-32 h-48 rounded-xl object-center" src={Men} alt="" />
        </div>

        <div className="bg-gray-800 w-full gap-1 h-56 text-white flex items-center justify-between px-3">
          {/* LEFT SIDE TEXT */}
          <div>
            <h2 className="text-2xl font-semibold">Men's Fashion</h2>
            <p className="text-xl font-thin mt-2">340 Items</p>

            <Link
              to="/collection"
              className="text-xl font-semibold border-b-2 border-transparent hover:border-white transition"
            >
              Shop Now
            </Link>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <img className="w-32 h-48 rounded-xl object-cover" src={Women} alt="" />
        </div>

        <div className="bg-gray-800 w-full gap-1 h-56 text-white flex items-center justify-between px-4">
          {/* LEFT SIDE TEXT */}
          <div>
            <h2 className="text-2xl font-semibold">Men's Fashion</h2>
            <p className="text-xl font-thin mt-2">340 Items</p>

            <Link
              to="/collection"
              className="text-xl font-semibold border-b-2 border-transparent hover:border-white transition"
            >
              Shop Now
            </Link>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <img className="w-32 h-48 rounded-xl object-cover" src={Accessories} alt="" />
        </div>

        <div className="bg-gray-800 w-full gap-1 h-56 text-white flex items-center justify-between px-3">
          {/* LEFT SIDE TEXT */}
          <div>
            <h2 className="text-2xl font-semibold">Men's Fashion</h2>
            <p className="text-xl font-thin mt-2">340 Items</p>

            <Link
              to="/collection"
              className="text-xl font-semibold border-b-2 border-transparent hover:border-white transition"
            >
              Shop Now
            </Link>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <img className="w-32 h-48 rounded-xl object-cover" src={Cosmetics} alt="" />
        </div>
      </section>
    </>
  );
};

export default Content;
