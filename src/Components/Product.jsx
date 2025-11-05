import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import men1 from "../assets/m-1.jpeg";
import men2 from "../assets/m-2.jpeg";
import men3 from "../assets/m-3.jpeg";
import men4 from "../assets/m-4.jpeg";
import men5 from "../assets/m-5.jpeg";
import Women1 from "../assets/w-1.jpg";
import Women2 from "../assets/w-2.jpg";
import Women3 from "../assets/w-3.jpg";
import Women4 from "../assets/w-4.jpg";
import Women5 from "../assets/w-5.jpeg";
import Women6 from "../assets/w-6.jpeg";
import Kid1 from "../assets/k-1.jpeg";
import Kid2 from "../assets/k-2.jpeg";
import Kid3 from "../assets/k-3.jpeg";
import Kid4 from "../assets/k-4.jpeg";
import Accessories1 from "../assets/a-1.jpg";
import Accessories2 from "../assets/a-2.jpg";
import cosmetics1 from "../assets/c-1.jpg";
import cosmetics2 from "../assets/c-2.jpg";
import { Link } from "react-router-dom";

const Product = () => {
  const allImages = [
    { id: 1, src: men1, category: "men" },
    { id: 2, src: men2, category: "men" },
    { id: 3, src: Women2, category: "women" },
    { id: 4, src: Women3, category: "women" },
    { id: 5, src: Accessories2, category: "accessories" },
    { id: 6, src: Kid2, category: "kids" },
    { id: 7, src: Kid3, category: "kids" },
    { id: 8, src: men4, category: "men" },
    { id: 9, src: Accessories1, category: "accessories" },
    { id: 10, src: cosmetics1, category: "cosmetics" },
    { id: 11, src: cosmetics2, category: "cosmetics" },
  ];

  const colors = [
    "bg-pink-100 text-pink-800 border-pink-300",
    "bg-blue-100 text-blue-800 border-blue-300",
    "bg-yellow-100 text-yellow-800 border-yellow-300",
    "bg-purple-100 text-purple-800 border-purple-300",
    "bg-green-100 text-green-800 border-green-300",
    "bg-red-100 text-red-800 border-red-300",
  ];

  const [showImages, setShowImages] = useState("all");

  const filteredImages =
    showImages === "all"
      ? allImages
      : allImages.filter((img) => img.category === showImages);

  return (
    <>
      <section className="p-4 relative font-poppins">
        <h1 className="absolute text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:origin-center after:scale-0 after:opacity-100 after:transition-transform after:duration-500  focus:after:scale-100">
          New Products
        </h1>

        <ul className="my-8 flex items-center gap-4 text-black flex-wrap">
          {["all", "men", "women", "kids", "accessories", "cosmetics"].map(
            (category, idx) => (
              <li
                key={category}
                onClick={() => setShowImages(category)}
                className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all border ${
                  colors[idx]
                } ${
                  showImages === category
                    ? "scale-105 shadow-md"
                    : "opacity-90 hover:opacity-100 hover:shadow-sm hover:scale-105"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            )
          )}

          <li>
            <Link
              to="/collection"
              className="px-4 py-2 text-xl rounded-full border border-gray-300 bg-white hover:bg-gray-100 hover:scale-105 transition-all "
            >
              &#8680;
            </Link>
          </li>
        </ul>

        <div className="grid grid-cols-2 justify-center gap-6 mt-8 md:grid md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map((item) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.category}
              className="w-64 h-80 object-cover rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Product;
