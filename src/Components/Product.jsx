import React, { useState } from "react";
import men1 from "../assets/m-1.jpeg";
import men2 from "../assets/m-2.jpeg";
import men3 from "../assets/m-3.jpeg";
import men4 from "../assets/m-4.jpeg";
import men5 from "../assets/m-5.jpeg";
import Women1 from '../assets/w-1.jpg'
import Women2 from '../assets/w-2.jpg'
import Women3 from '../assets/w-3.jpg'
import Women4 from '../assets/w-4.jpg'
import Women5 from '../assets/w-5.jpeg'
import Women6 from '../assets/w-6.jpeg'
import Kid1 from '../assets/k-1.jpeg'
import Kid2 from '../assets/k-2.jpeg'
import Kid3 from '../assets/k-3.jpeg'
import Kid4 from '../assets/k-4.jpeg'
import Accessories1 from '../assets/a-1.jpg'
import Accessories2 from '../assets/a-2.jpg'
import cosmetics1 from '../assets/c-1.jpg'
import cosmetics2 from '../assets/c-2.jpg'


const Product = () => {

    const allImages = [
        {id:1, src: men1, category: "men"},
        {id:2, src: men2, category: "men"},
        {id:3, src: Women2, category: "women"},
        {id:4, src: Women3, category: "women"},
        {id:5, src: Accessories2, category: "accessories"},
        {id:6, src: Kid2, category: "kids"},
        {id:7, src: Kid3, category: "kids"},
        {id:8, src: men4, category: "men"},
        {id:9, src: Accessories1, category: "accessories"},
        {id:10, src: cosmetics1, category: "cosmetics"},
        {id:11, src: cosmetics2, category: "cosmetics"},
    ]

//   const menImages = [
//     { id: 1, src: men1 },
//     { id: 2, src: men2 },
//     { id: 3, src: men3 },
//     { id: 4, src: men4 },
//   ];

  const [showImages, setShowImages] = useState("all");

  const filteredImages = showImages === "all" ? allImages : allImages.filter((img) => img.category === showImages)


  return (
    <>
      <section className="p-4 relative font-poppins">
        <h1 className="absolute text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:origin-center after:scale-0 after:opacity-100 after:transition-transform after:duration-500  focus:after:scale-100">
          New Products
        </h1>
        
        <ul className="my-8 flex gap-4 items-center text-black ">
        {["all", "men", "women", "kids", "accessories", "cosmetics"].map(
          (category) => (
            <li
              key={category}
              onClick={() => setShowImages(category)}
              className={`cursor-pointer hover:border-solid hover:border hover:rounded-2xl hover:p-2 ${
                showImages === category ? "" : ""
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          )
        )}
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
