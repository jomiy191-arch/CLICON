import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/CartWishlistContext";
import { Heart, ShoppingCart, X, ArrowLeft } from "lucide-react";

const WishlistPage = () => {
  const { state, dispatch } = useStateContext();
  const { wishlist } = state;

  const removeFromWish = (id) =>
    dispatch({ type: "TOGGLE_WISHLIST", payload: { id } });

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  // Empty wishlist
  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full border border-gray-100">
          <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart size={40} className="text-pink-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Your wishlist is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Save your favorite items here and shop them later!
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
        <Heart className="text-pink-500" size={32} />
        Your Wishlist
        <span className="text-lg font-normal text-gray-500 ml-2">
          ({wishlist.length} {wishlist.length === 1 ? "Item" : "Items"})
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group relative border border-gray-100 overflow-hidden"
          >
            {/* Remove button */}
            <button
              onClick={() => removeFromWish(item.id)}
              className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50 hover:text-red-500"
              aria-label="Remove from wishlist"
            >
              <X size={16} />
            </button>

            {/* Product image */}
            <Link to={`/product/${item.slug}`} className="block p-4 pb-0">
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-4 border border-gray-200">
                <img
                  src={item.images?.[0] || "/placeholder-image.png"}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Product details */}
            <div className="p-4">
              <Link to={`/product/${item.slug}`}>
                <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 hover:text-orange-500 transition">
                  {item.name}
                </h3>
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xl font-bold text-orange-500">
                  ${item.price.toFixed(2)}
                </span>
                {item.oldPrice && (
                  <span className="text-sm line-through text-gray-400">
                    ${item.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Add to Cart button */}
              <button
                onClick={() => addToCart(item)}
                className="w-full mt-4 bg-orange-500 text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-orange-600 transition shadow-sm hover:shadow"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;