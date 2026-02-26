import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Heart,
  ShoppingCart,
  Eye,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useStateContext } from '../context/CartWishlistContext';

// Import images
import tel from "../assets/Images/Image (6).svg";
import Essence from "../assets/Images/eyeshadow-palette.svg";

const FullEcommercePage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useStateContext();
  const allProducts = products;

  // Categories data
  const categories = [
    { name: 'Jewellery', icon: '💍' },
    { name: 'Womens Shoes', icon: '👠' },
    { name: 'Womens Watches', icon: '⌚' },
    { name: 'Beauty', icon: '💄' },
    { name: 'Fragrances', icon: '🌸' },
    { name: 'Furniture', icon: '🪑' },
    { name: 'Electronics', icon: '📱' },
    { name: 'Books', icon: '📚' },
  ];

  // Carousel ref and state
  const categoryRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to show/hide arrows
  const checkScroll = () => {
    if (categoryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoryRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px threshold
    }
  };

  useEffect(() => {
    const ref = categoryRef.current;
    if (ref) {
      checkScroll();
      ref.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        ref.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  // Scroll handlers
  const scrollLeft = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Featured product
  const featuredProduct = {
    id: 'essence-mascara',
    name: 'Essence Mascara Lash Princess',
    slug: 'essence-mascara',
    price: 8.94,
    oldPrice: 9.99,
    images: [Essence],
    rating: 4,
    description: 'Popular mascara known for volumizing and lengthening effects.',
  };

  const isInWishlist = state.wishlist.some(item => item.id === featuredProduct.id);

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
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      {/* 1. SHOP WITH CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-10">Shop with Categories</h2>
        <div className="relative flex items-center">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute -left-4 z-10 p-2 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Carousel Container */}
          <div
            ref={categoryRef}
            className="flex gap-4 overflow-x-auto scroll-smooth w-full px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="min-w-[160px] bg-white border border-gray-100 p-6 rounded-lg text-center flex flex-col items-center group cursor-pointer hover:border-orange-500 transition-all"
              >
                <div className="w-20 h-20 bg-orange-100 rounded-full mb-4 flex items-center justify-center text-3xl">
                  {cat.icon}
                </div>
                <span className="font-medium text-gray-700">{cat.name}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute -right-4 z-10 p-2 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </section>

      {/* 2. BEST DEALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Best Deals</h2>
            <div className="bg-yellow-400 px-3 py-1 rounded text-sm font-bold">
              13d 22h 39m 37s
            </div>
          </div>
          <button
            onClick={() => navigate('/products')}
            className="text-orange-500 font-semibold flex items-center gap-1 hover:underline"
          >
            Browse All Products <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left side featured product */}
          <div className="lg:col-span-1 bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <img
              src={featuredProduct.images[0]}
              alt={featuredProduct.name}
              className="w-full h-48 object-contain mb-6"
            />
            <div className="w-full">
              <div className="flex text-yellow-400 mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < Math.floor(featuredProduct.rating) ? '★' : '☆'}</span>
                ))}
              </div>
              <h3 className="font-bold text-lg mb-2">{featuredProduct.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-sm">${featuredProduct.oldPrice}</span>
                <span className="text-orange-500 font-bold text-xl">${featuredProduct.price}</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">{featuredProduct.description}</p>

              <div className="flex gap-2">
                <button
                  onClick={toggleWishlistFeatured}
                  className={`p-3 rounded transition-all ${
                    isInWishlist
                      ? 'bg-orange-500 text-white'
                      : 'bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white'
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} fill={isInWishlist ? 'white' : 'none'} />
                </button>
                <button
                  onClick={addToCartFeatured}
                  className="flex-1 bg-orange-500 text-white py-3 rounded font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all"
                >
                  <ShoppingCart size={20} /> ADD TO CART
                </button>
                <button
                  onClick={quickViewFeatured}
                  className="p-3 bg-orange-50 rounded text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
                  aria-label="Quick view"
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right side product grid */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {allProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
        {/* Banner */}
        <div className="w-full md:w-1/4 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-2xl p-8 relative overflow-hidden flex flex-col items-center text-center shadow-lg">
          <span className="text-orange-700 font-bold text-sm uppercase tracking-wider">
            Computer & Accessories
          </span>
          <h2 className="text-4xl font-black mt-2 mb-4 text-gray-900">32% Discount</h2>
          <p className="text-gray-800 mb-6 font-medium">For all electronics products</p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition shadow-md">
            Shop Now
          </button>
          <img
            src={tel}
            alt="Electronics"
            className="mt-8 w-40 object-contain opacity-80"
          />
        </div>

        {/* Products */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <div className="flex gap-4 text-sm font-medium text-gray-500">
              <span className="text-orange-500 border-b-2 border-orange-500 pb-1 cursor-pointer">
                All
              </span>
              <span className="hover:text-orange-500 cursor-pointer">Beauty</span>
              <span className="hover:text-orange-500 cursor-pointer">Fragrances</span>
              <span className="hover:text-orange-500 cursor-pointer">Furniture</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullEcommercePage;