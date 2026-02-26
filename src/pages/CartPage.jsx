import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/CartWishlistContext";
import {
  Trash2,
  Minus,
  Plus,
  ArrowLeft,
  ShoppingCart,
  Tag,
  Truck,
  Shield,
} from "lucide-react";

const CartPage = () => {
  const { state, dispatch } = useStateContext();
  const { cart } = state;

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const updateQty = (id, newQty) => {
    if (newQty < 1) return;
    dispatch({ type: "UPDATE_QTY", payload: { id, qty: newQty } });
  };

  const removeItem = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });

  // Empty cart view
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full border border-gray-100">
          <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart size={40} className="text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added any products yet.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-md hover:shadow-lg"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <ShoppingCart className="text-orange-500" size={32} />
        Shopping Cart
        <span className="text-lg font-normal text-gray-500 ml-2">
          ({cart.length} {cart.length === 1 ? "Item" : "Items"})
        </span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items - Left Column */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 sm:p-6 flex flex-col sm:flex-row gap-6 border border-gray-100"
            >
              {/* Product Image */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 p-2">
                <img
                  src={item.images?.[0] || "/placeholder-image.png"}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    SKU: {item.sku || item.id.substring(0, 8)}
                  </p>
                  <div className="flex items-baseline gap-3 mt-2">
                    <span className="text-2xl font-bold text-orange-500">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.oldPrice && (
                      <span className="text-sm line-through text-gray-400">
                        ${item.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="p-2 hover:bg-gray-100 transition disabled:opacity-50"
                      disabled={item.qty <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-medium">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="p-2 hover:bg-gray-100 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                    title="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Continue Shopping Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition mt-4"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary - Right Column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Tag size={20} className="text-orange-500" />
              Order Summary
            </h2>

            <div className="space-y-4 border-b border-gray-200 pb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Discount</span>
                <span className="text-red-500">-$0.00</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold py-6">
              <span>Total</span>
              <span className="text-orange-500">${subtotal.toFixed(2)}</span>
            </div>

            <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold hover:bg-orange-600 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Proceed to Checkout
              <ArrowLeft size={18} className="rotate-180" />
            </button>

            {/* Coupon */}
            <div className="mt-6">
              <p className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Tag size={16} className="text-orange-500" />
                Apply Coupon
              </p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button className="bg-gray-800 text-white px-6 rounded-r-lg font-medium hover:bg-gray-900 transition">
                  Apply
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Truck size={18} className="text-orange-400" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-orange-400" />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;