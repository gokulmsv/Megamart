import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Wishlist = ({ cartItems, setCartItems }) => {
  const [wishlist, setWishlist] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setActiveUser(user);

        const wishlistKey = `${user.uid}_wishlist`;
        const savedWishlist =
          JSON.parse(localStorage.getItem(wishlistKey)) || [];
        setWishlist(savedWishlist);
      } else {
        setActiveUser(null);
      }
    });

    return () => unsub();
  }, []);

  if (!activeUser)
    return (
      <h2 className="text-center mt-10">Please login to see your wishlist.</h2>
    );
  if (wishlist.length === 0)
    return <h2 className="text-center mt-10">Your wishlist is empty!</h2>;

  const wishlistKey = `${activeUser.id}_wishlist`;

  const handleAddToCart = (product) => {
    if (!activeUser) {
      toast.info("Please login first.");
      return;
    }

    const userId = activeUser.uid;
    const cartKey = `${userId}_cart`;

    const existingCart = JSON.parse(localStorage.getItem(cartKey)) || [];

    const itemExist = existingCart.find((item) => item.id === product.id);
    let updatedCart;

    if (!itemExist) {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
      toast.success("Product added to cart!");
    } else {
      updatedCart = existingCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      toast.info("Product quantity updated in cart!");
    }

    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleRemove = (product) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    setWishlist(updatedWishlist);
    localStorage.setItem(wishlistKey, JSON.stringify(updatedWishlist));
    toast.info("Removed from wishlist!");
  };

  return (
    <section className="min-h-screen p-6 font-poppins">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-36 object-contain rounded-md"
            />
            <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-500 text-xs mt-1 line-clamp-2">
              {product.description.slice(0, 50)}...
            </p>
            <p className="text-gray-800 font-bold mt-2">${product.price}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleAddToCart(product)}
                className="px-3 py-1 bg-gray-800 text-white text-xs font-bold rounded hover:bg-gray-700"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleRemove(product)}
                className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded hover:bg-red-600 flex items-center gap-1"
              >
                <FaHeart /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
