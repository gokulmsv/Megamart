import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

/**
 * Per-user Cart with localStorage persistence.
 */
const Cart = ({ cartItems, setCartItems }) => {
  // helper to read id/title/image/price/quantity from either shape
  const getField = (item, key) => {
    if (item == null) return undefined;
    if (item[key] !== undefined) return item[key];
    if (item.data && item.data[key] !== undefined) return item.data[key];
    return undefined;
  };

  // 🧠 Get current active user
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const userId = activeUser?.id;

  // 🧠 Create unique storage key for this user
  const cartKey = `${userId}_cart`;

  // 🧠 Load cart from user-specific storage
  const [userCart, setUserCart] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(cartKey));
    return saved || [];
  });

  // 🧠 Keep both local state and parent state synced
  useEffect(() => {
    setCartItems(userCart);
    localStorage.setItem(cartKey, JSON.stringify(userCart));
  }, [userCart]);

  // helper to get canonical id
  const getId = (item) =>
    getField(item, "id") ?? getField(item, "_id") ?? getField(item, "sku") ?? "";

  const handleRemove = (targetId) => {
    setUserCart((items) => items.filter((item) => getId(item) !== targetId));
    toast.info("Removed item from cart");
  };

  const handleCheckout = () => {
    toast.success("Checkout Successful!");
  };

  const handleIncrease = (targetId) => {
    setUserCart((items) =>
      items.map((item) => {
        if (getId(item) !== targetId) return item;
        const currentQty =
          item.quantity ?? (item.data && item.data.quantity) ?? 0;
        return { ...item, quantity: currentQty + 1 };
      })
    );
  };

  const handleDecrease = (targetId) => {
    setUserCart((items) =>
      items
        .map((item) => {
          if (getId(item) !== targetId) return item;
          const currentQty =
            item.quantity ?? (item.data && item.data.quantity) ?? 1;
          const newQty = currentQty - 1;
          if (newQty <= 0) return null;
          return { ...item, quantity: newQty };
        })
        .filter(Boolean)
    );
  };

  const totalAmount = userCart.reduce((sum, item) => {
    const price = getField(item, "price") ?? 0;
    const qty = item.quantity ?? (item.data && item.data.quantity) ?? 1;
    return sum + price * qty;
  }, 0);

  return (
    <section className="font-poppins p-6 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart 🛒</h2>

      {userCart.length === 0 ? (
        <h3 className="text-lg text-gray-600">Your cart is empty!</h3>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {userCart.map((item) => {
              const id = getId(item);
              const title =
                getField(item, "title") ?? getField(item, "name") ?? "No title";
              const image =
                getField(item, "image") ?? getField(item, "thumbnail") ?? "";
              const price = getField(item, "price") ?? 0;
              const quantity =
                item.quantity ?? (item.data && item.data.quantity) ?? 1;

              return (
                <div
                  key={id || Math.random()}
                  className="bg-white rounded-lg p-4 shadow-md flex items-center justify-between gap-4"
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-20 h-20 object-contain"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/80?text=No+Image";
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm leading-5 line-clamp-2">
                      {title}
                    </h3>
                    <p className="font-bold text-gray-700 mt-1">
                      ${(price * quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrease(id)}
                      className="px-3 py-1 bg-gray-300 rounded font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-3">{quantity}</span>
                    <button
                      onClick={() => handleIncrease(id)}
                      className="px-3 py-1 bg-gray-300 rounded font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(id)}
                    className="text-red-500 font-semibold cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-lg font-bold">
            Total: ${totalAmount.toFixed(2)}
          </div>

          <button
            onClick={handleCheckout}
            className="mt-4 bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 cursor-pointer"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </section>
  );
};

export default Cart;
