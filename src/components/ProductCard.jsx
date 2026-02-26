import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useStateContext } from '../context/CartWishlistContext';
import QuickViewModal from './QuickViewModal';

const ProductCard = ({ product }) => {
  const { state, dispatch } = useStateContext();
  const [showModal, setShowModal] = useState(false);

  const isInWishlist = state.wishlist.some(item => item.id === product.id);

  const toggleWishlist = () => {
    dispatch({ type: 'TOGGLE_WISHLIST', payload: product });
  };

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const quickView = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="relative border border-gray-200 rounded-lg p-4 flex flex-col items-center bg-white overflow-hidden group transition hover:shadow-xl">

        {/* PRODUCT IMAGE */}
        <div className="relative w-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-44 object-contain transition duration-300 group-hover:scale-105"
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">

            {/* Wishlist */}
            <button
              onClick={toggleWishlist}
              className={`p-3 rounded-full transition ${
                isInWishlist
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-orange-500 hover:bg-orange-500 hover:text-white'
              }`}
            >
              <Heart size={18} fill={isInWishlist ? 'white' : 'none'} />
            </button>

            {/* Add To Cart */}
            <button
              onClick={addToCart}
              className="p-3 bg-white rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition"
            >
              <ShoppingCart size={18} />
            </button>

            {/* Quick View */}
            <button
              onClick={quickView}
              className="p-3 bg-white rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition"
            >
              <Eye size={18} />
            </button>

          </div>
        </div>

        {/* PRODUCT INFO */}
        <h3 className="font-semibold text-gray-900 mt-4 text-center">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-400 line-through text-sm">
            ${product.oldPrice}
          </span>
          <span className="text-blue-500 font-bold text-lg">
            ${product.price}
          </span>
        </div>

        <div className="flex text-yellow-400 mt-1">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>
              {i < Math.floor(product.rating) ? '★' : '☆'}
            </span>
          ))}
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      {showModal && (
        <QuickViewModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProductCard;