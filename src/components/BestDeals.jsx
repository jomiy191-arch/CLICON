// src/components/BestDeals.jsx
import React from 'react';
import { ArrowRight, Heart, ShoppingCart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import Essence from "../assets/Images/eyeshadow-palette.svg"; // Your mascara image
import { useStateContext } from '../context/CartWishlistContext';
import { products } from '../data/products';

const BestDeals = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useStateContext();
  const dealProducts = products.slice(0, 8);

  // Define the featured product object
  const featuredProduct = {
    id: 'essence-mascara',
    name: 'Essence Mascara Lash Princess',
    slug: 'essence-mascara',
    price: 8.94,
    oldPrice: 9.99,
    images: [Essence],
    rating: 4,
    reviews: 0,
    category: 'Beauty',
    description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.'
  };

  // Check if featured product is in wishlist
  const isInWishlist = state.wishlist.some(item => item.id === featuredProduct.id);

  // Handlers for featured product
  const toggleWishlistFeatured = () => {
    dispatch({ type: 'TOGGLE_WISHLIST', payload: featuredProduct });
  };

  const addToCartFeatured = () => {
    dispatch({ type: 'ADD_TO_CART', payload: featuredProduct });
  };

  const quickViewFeatured = () => {
    navigate(`/product/${featuredProduct.slug}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Best Deals</h2>
          <div className="bg-[#FFD700] px-3 py-1 rounded text-sm font-bold flex items-center gap-1">
            Deals ends in: <span className="bg-white px-1 rounded ml-1">13d 22h 39m 37s</span>
          </div>
        </div>
        <button 
          onClick={() => navigate('/products')}
          className="text-[#2DA5F3] font-semibold flex items-center gap-1 hover:underline"
        >
          Browse All Products <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left side featured product */}
        <div className="lg:col-span-1 border border-gray-200 rounded-lg p-6 flex flex-col items-center bg-white">
          <img
            src={featuredProduct.images[0]}
            alt={featuredProduct.name}
            className="w-full h-64 object-contain mb-4"
          />
          <div className="w-full">
            <div className="flex text-yellow-400 mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>{i < Math.floor(featuredProduct.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              {featuredProduct.name}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 line-through text-sm">${featuredProduct.oldPrice}</span>
              <span className="text-[#2DA5F3] font-bold text-xl">${featuredProduct.price}</span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {featuredProduct.description}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleWishlistFeatured}
                className={`p-3 rounded transition-all ${
                  isInWishlist
                    ? 'bg-[#FA8232] text-white'
                    : 'bg-[#FFE7D6] text-[#FA8232] hover:bg-[#FA8232] hover:text-white'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart size={20} fill={isInWishlist ? 'white' : 'none'} />
              </button>
              <button
                onClick={addToCartFeatured}
                className="flex-1 bg-[#FA8232] text-white py-3 rounded font-bold flex items-center justify-center gap-2 hover:bg-[#e67329] transition-all"
              >
                <ShoppingCart size={20} /> ADD TO CART
              </button>
              <button
                onClick={quickViewFeatured}
                className="p-3 bg-[#FFE7D6] rounded text-[#FA8232] hover:bg-[#FA8232] hover:text-white transition-all"
                aria-label="Quick view"
              >
                <Eye size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right side product grid */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;