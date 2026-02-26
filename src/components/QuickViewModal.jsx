import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useStateContext } from '../context/CartWishlistContext';

const QuickViewModal = ({ product, onClose }) => {
  const { dispatch } = useStateContext();

  if (!product) return null;

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3"
        >
          <X />
        </button>

        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-contain mb-4"
        />

        <h2 className="text-xl font-bold mb-2">{product.name}</h2>

        <p className="text-lg font-semibold text-blue-500 mb-4">
          ${product.price}
        </p>

        <button
          onClick={addToCart}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default QuickViewModal;