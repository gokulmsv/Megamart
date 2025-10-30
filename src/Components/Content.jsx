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
        <div className="bg-gray-800 w-full h-56 text-white">
          <img className="w-44 h-52 my-2 mx-52 rounded-xl md:w-36" src={Men} alt="" />
          <h2 className="absolute top-10 p-5 text-2xl font-semibold">
            Men's Fashion
          </h2>
          <p className="absolute top-18 p-5 text-xl font-thin">340 Items</p>
          <p className="absolute top-32 p-2 ml-3 mt-7 text-xl cursor-pointer font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:origin-center after:scale-0 after:opacity-100 after:transition-transform after:duration-500 hover:after:scale-70 focus:after:scale-100">
           <Link to="/collection">Shop Now</Link> 
          </p>
        </div>

        <div className="bg-gray-800 w-full h-56 text-white relative">
          <img className="w-44 h-52 my-2 mx-52 rounded-xl md:w-36" src={Women} alt=""/>
          <h2 className="absolute top-10 p-5 text-2xl font-semibold">Women's <br/> <span className="pl-16">Fashion</span></h2>
          <p className="absolute top-24 p-5 text-xl font-thin">340 Items</p>
          <p className="absolute top-32 p-2 ml-3 mt-7 text-xl cursor-pointer font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:origin-center after:scale-0 after:opacity-100 after:transition-transform after:duration-500 hover:after:scale-70 focus:after:scale-100">
            <Link to="/collection">Shop Now</Link> 
          </p>
        </div>

        <div className="bg-gray-800 w-full h-56 text-white relative">
          <img className="w-44 h-52 my-2 mx-52 rounded-xl md:w-36" src={Accessories} alt=""/>
          <h2 className="absolute top-10 p-5 text-2xl font-semibold">Accessories<br/></h2>
          <p className="absolute top-20 p-5 text-xl font-thin">340 Items</p>
          <p className="absolute top-32 p-2 ml-3 mt-7 text-xl cursor-pointer font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:origin-center after:scale-0 after:opacity-100 after:transition-transform after:duration-500 hover:after:scale-70 focus:after:scale-100">
            <Link to="/collection">Shop Now</Link> 
          </p>
        </div>

        <div className="bg-gray-800 w-full h-56 text-white relative">
          <img className="w-44 h-52 my-2 mx-52 rounded-xl md:w-36" src={Cosmetics} alt=""/>
          <h2 className="absolute top-10 p-5 text-2xl font-semibold">Cosmetics</h2>
          <p className="absolute top-20 p-5 text-xl font-thin">340 Items</p>
          <p className="absolute top-32 p-2 ml-3 mt-7 text-xl cursor-pointer font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:origin-center after:scale-0 after:opacity-100 after:transition-transform after:duration-500 hover:after:scale-70 focus:after:scale-100">
            <Link to="/collection">Shop Now</Link> 
          </p>
        </div>
      </section>
    </>
  );
};

export default Content;
