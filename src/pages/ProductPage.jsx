// src/components/ProductCard.jsx
import React from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useStateContext } from '../context/CartWishlistContext';

const ProductCard = ({ product }) => {
  const { state, dispatch } = useStateContext();
  const isInWishlist = state.wishlist.some(item => item.id === product.id);

  const toggleWishlist = () => {
    dispatch({ type: 'TOGGLE_WISHLIST', payload: { id: product.id } });
  };

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const quickView = () => {
    // Open a modal or navigate to product page
    console.log('Quick view for', product.name);
    // You can dispatch an action to open a modal or set state in a parent
  };

  return (
    <div className="relative border border-gray-200 rounded-lg p-4 flex flex-col items-center bg-white overflow-hidden group">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Hover buttons */}
      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={toggleWishlist}
          className={`p-2 rounded-full shadow transition-all ${
            isInWishlist
              ? 'bg-[#FA8232] text-white'
              : 'bg-white text-[#FA8232] hover:bg-[#FA8232] hover:text-white'
          }`}
        >
          <Heart size={16} fill={isInWishlist ? 'white' : 'none'} />
        </button>
        <button
          onClick={addToCart}
          className="p-2 bg-white rounded-full text-[#FA8232] shadow hover:bg-[#FA8232] hover:text-white transition-all"
        >
          <ShoppingCart size={16} />
        </button>
        <button
          onClick={quickView}
          className="p-2 bg-white rounded-full text-[#FA8232] shadow hover:bg-[#FA8232] hover:text-white transition-all"
        >
          <Eye size={16} />
        </button>
      </div>

      <h3 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
        <span className="text-[#2DA5F3] font-bold text-xl">${product.price}</span>
      </div>

      <div className="flex text-yellow-400 mb-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;