import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Collection = ({ cartItems, setCartItems }) => {
  const [data, setData] = useState([]); // all products
  const [filtered, setFiltered] = useState([]); // filtered products
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data.products || data); // handle if JSON has {products: [...]}
        setFiltered(data.products || data); // initially show all products
      });
  }, []);

  const handleFilters = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFiltered(data); // data is stored all products in json so if i filtered product we can use data
    } else {
      const filteredData = data.filter((item) => item.category === category); // this line we use item as a key because we need to filter products so
      // which i prefer item and i filtered item.category this one is helpful.
      setFiltered(filteredData);
    }
  };

  const handleAddToCart = (product) => {
    const itemExist = cartItems.find((item) => item.id === product.id);

    if (!itemExist) {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
      toast.success("Product Added Successfully!");
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast.info("Product Quantity Updated!");
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-400 to-teal-800 font-poppins min-h-screen pb-10">
      <h1 className="text-2xl p-5 font-bold text-white">Product Collection</h1>

      {/* Category Filter */}
      <ul className="flex justify-center gap-8 text-white font-medium pb-5">
        {["All", "Men", "Women", "Jewellery", "Electronics"].map((ct) => (
          <li
            key={ct}
            onClick={() => handleFilters(ct)}
            className={`cursor-pointer list-none transition-all hover:underline hover:underline-offset-8 ${
              activeCategory === ct ? "font-bold underline" : ""
            }`}
          >
            {ct} {/* show the current value of the variable */}
          </li>
        ))}
      </ul>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-white flex flex-col h-80 items-center justify-between shadow-md rounded-lg p-4 hover:shadow-lg transition-all"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-md h-40 w-36 object-contain"
            />
            <div className="text-center">
              <h1 className="text-sm font-semibold mt-2 line-clamp-1">
                {product.title}
              </h1>
              <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                {product.description.slice(0, 50)}...
              </p>
              <p className="text-gray-800 font-bold mt-2">${product.price}</p>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
