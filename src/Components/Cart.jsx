import React from "react";
import { toast } from "react-toastify";

/**
 * Robust Cart component that supports two item shapes:
 * 1) { id, title, image, price, quantity }
 * 2) { data: { id, title, image, price }, quantity }  OR  { data: { ... } }
 *
 * It preserves the original shape when updating quantity/remove.
 */

const Cart = ({ cartItems, setCartItems }) => {
  // helper to read id/title/image/price/quantity from either shape
  const getField = (item, key) => {
    if (item == null) return undefined;
    if (item[key] !== undefined) return item[key];
    if (item.data && item.data[key] !== undefined) return item.data[key];
    return undefined;
  };

  // helper to get canonical id
  const getId = (item) =>
    getField(item, "id") ??
    getField(item, "_id") ??
    getField(item, "sku") ??
    "";

  const handleRemove = (targetId) => {
    setCartItems((items) => items.filter((item) => getId(item) !== targetId));
    toast.info("Removed item from cart");
  };

  const handleCheckout = () => {
    toast.success("Checkout Successfully");
  };

  const handleIncrease = (targetId) => {
    setCartItems((items) =>
      items.map((item) => {
        if (getId(item) !== targetId) return item;

        // find existing quantity in either place
        const currentQty =
          item.quantity ?? (item.data && item.data.quantity) ?? 0;

        // preserve original shape:
        if (item.data && item.id === undefined && item._id === undefined) {
          // shape: { data: {...}, quantity? }
          return {
            ...item,
            quantity: currentQty + 1,
          };
        } else {
          // flat shape { id, title, ... }
          return {
            ...item,
            quantity: currentQty + 1,
          };
        }
      })
    );
  };

  const handleDecrease = (targetId) => {
    setCartItems(
      (items) =>
        items
          .map((item) => {
            if (getId(item) !== targetId) return item;

            const currentQty =
              item.quantity ?? (item.data && item.data.quantity) ?? 1;
            const newQty = currentQty - 1;

            if (newQty <= 0) {
              // we'll remove later by filtering (map->null handled below)
              return null;
            }

            // Preserve shape, set new quantity
            return {
              ...item,
              quantity: newQty,
            };
          })
          .filter(Boolean) // remove nulls (items with qty 0)
    );
  };

  
  const totalAmount = cartItems.reduce((sum, item) => {
    const price = getField(item, "price") ?? 0;
    const qty = item.quantity ?? (item.data && item.data.quantity) ?? 1;
    return sum + price * qty;
  }, 0);

  return (
    <section className="font-poppins p-6 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <h3 className="text-lg text-gray-600">Your cart is empty!</h3>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => {
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
                  {/* Product Image */}
                  <img
                    src={image}
                    alt={title}
                    className="w-20 h-20 object-contain"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/80?text=No+Image";
                    }}
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm leading-5 line-clamp-2">
                      {title}
                    </h3>
                    <p className="font-bold text-gray-700 mt-1">
                      ${(price * quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Buttons */}
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

                  {/* Remove Button */}
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

          {/* Total */}
          <div className="mt-6 text-lg font-bold">
            Total: ${totalAmount.toFixed(2)}
          </div>

          {/* Checkout Button */}
          <button onClick={handleCheckout} className="mt-4 bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 cursor-pointer">
            Proceed to Checkout
          </button>
        </>
      )}
    </section>
  );
};

export default Cart;
