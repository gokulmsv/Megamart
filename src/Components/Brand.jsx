import React from "react";
import b1 from "../assets/adidas.png";
import b2 from "../assets/hm.png";
import b3 from "../assets/reebok.png";
import b4 from "../assets/puma.png";
import b5 from "../assets/nike.jpg";
import b6 from "../assets/levis.png";

const Brand = () => {
  return (
    <>
      <section className="font-poppins p-6">
        <h2>TOP BRANDS</h2>
        <div className="grid grid-cols-2 gap-2 p-3 my-4 justify-between transition-all duration-300 sm:grid-cols-3 md:flex lg:overflow-hidden scroll-auto">
          <img
            className="w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-md p-4 hover:scale-110 transition-transform duration-300"
            src={b1}
            alt=""
          />
          <img
            className="w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-md p-4 hover:scale-110 transition-transform duration-300"
            src={b2}
            alt=""
          />
          <img
            className="w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-md p-4 hover:scale-110 transition-transform duration-300"
            src={b3}
            alt=""
          />
          <img
            className="w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-md p-4 hover:scale-110 transition-transform duration-300"
            src={b4}
            alt=""
          />
          <img
            className="w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-md p-4 hover:scale-110 transition-transform duration-300"
            src={b5}
            alt=""
          />
          <img
            className="w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-md p-4 hover:scale-110 transition-transform duration-300"
            src={b6}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Brand;
