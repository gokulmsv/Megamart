import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const Collection = ({ cartItems, setCartItems }) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [liked, setLiked] = useState(
    JSON.parse(localStorage.getItem("likedProducts")) || {}
  );

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data.products || data;
        setData(products);
        setFiltered(products);
      });
  }, []);

  // Toggle wishlist
  const toggleLike = (product) => {
    setLiked((prevLiked) => {
      const isLiked = !!prevLiked[product.id];
      const updatedLiked = { ...prevLiked, [product.id]: !isLiked };
      localStorage.setItem("likedProducts", JSON.stringify(updatedLiked));

      let wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
      if (!isLiked) {
        if (!wishlist.find((item) => item.id === product.id)) wishlist.push(product);
        toast.success("Added to wishlist!");
      } else {
        wishlist = wishlist.filter((item) => item.id !== product.id);
        toast.info("Removed from wishlist!");
      }
      localStorage.setItem("wishlistItems", JSON.stringify(wishlist));

      return updatedLiked;
    });
  };

  // Add to cart
  const handleAddToCart = (product) => {
    const itemExist = cartItems.find((item) => item.id === product.id);
    if (!itemExist) {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
      toast.success("Product Added Successfully!");
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      toast.info("Product Quantity Updated!");
    }
  };

  // Search products
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFiltered(filteredData);
  };

  // Filter by category
  const handleFilters = (category) => {
    setActiveCategory(category);
    if (category === "All") setFiltered(data);
    else setFiltered(data.filter((item) => item.category === category));
  };

  // Sort products
  const sortByPriceHighToLow = () => setFiltered([...filtered].sort((a, b) => b.price - a.price));
  const sortByPriceLowToHigh = () => setFiltered([...filtered].sort((a, b) => a.price - b.price));

  return (
    <section className="font-poppins pb-10 min-h-screen relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-500 to-teal-800 h-60">
        <h1 className="text-4xl pt-16 pl-5 font-bold text-white">
          Product Collection
        </h1>
        <p className="text-lg pl-5 mt-1 text-white">
          Discover amazing products at great prices
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-100 pl-6 mt-8">
        <IoSearchSharp className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />
        <input
          className="border rounded-lg focus:ring-teal-500 focus:border-transparent transition-all pr-4 py-3 border-gray-300 pl-12 w-full"
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Categories */}
      <ul className="grid grid-cols-3 md:flex md:items-center pl-5 gap-4 text-black font-medium pb-5 mt-7">
        {["All", "Men", "Women", "Jewellery", "Electronics"].map((ct) => (
          <li
            key={ct}
            onClick={() => handleFilters(ct)}
            className={`cursor-pointer list-none transition-all p-2 rounded-lg text-gray-700 ${
              activeCategory === ct ? "font-bold bg-teal-700 text-white" : ""
            }`}
          >
            {ct}
          </li>
        ))}
      </ul>

      {/* Sort */}
      <div className="relative pl-5 pb-4">
        <h2 className="text-xl">Sort by:</h2>
        <select
          onChange={(e) => {
            if (e.target.value === "High to Low") sortByPriceHighToLow();
            else if (e.target.value === "Low to High") sortByPriceLowToHigh();
            else handleFilters(activeCategory);
          }}
          className="absolute font-medium border border-black rounded-md left-28 -translate-y-6 pl-3"
        >
          <option value="default">Featured</option>
          <option value="High to Low">Price: High to Low</option>
          <option value="Low to High">Price: Low to High</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="group bg-white flex flex-col h-80 items-center justify-between shadow-md rounded-lg p-4 hover:shadow-lg transition-all relative"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-md h-40 w-36 object-contain"
            />

            {/* Heart */}
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(product);
              }}
            >
              {liked[product.id] ? (
                <FaHeart size={20} className="text-red-500" />
              ) : (
                <FaRegHeart size={20} className="text-gray-600 hover:text-red-400" />
              )}
            </div>

            {/* Product Info */}
            <div className="text-center mt-2">
              <h1 className="text-sm font-semibold mt-2 line-clamp-1">{product.title}</h1>
              <p className="text-gray-500 text-xs mt-1 line-clamp-2">{product.description.slice(0, 50)}...</p>
              <p className="text-gray-800 font-bold mt-2">${product.price}</p>
            </div>

            {/* Add to Cart */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(product);
              }}
              className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 transition-opacity duration-300 mt-2"
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
