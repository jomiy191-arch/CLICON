import React from 'react';
import { ShoppingCart, Heart, Eye, Star, ArrowRight, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import  Bluetooth from "../assets/Images/download.png"
import salom from "../assets/Images/salom.png"
import { products } from '../data/products';

const EcommercePage = () => {
  const allProducts = products;

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-10 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* TOP BANNERS – o‘zgarishsiz qoladi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Apple Banner */}
          <div className="bg-[#F2F4F7] rounded-xl p-8 flex items-center justify-between relative overflow-hidden">
            <div className="z-10 flex-1">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                Introducing
              </span>
              <h2 className="text-3xl font-bold mt-4 mb-2 leading-tight">
                New Apple <br /> Homepod Mini
              </h2>
              <p className="text-gray-500 text-sm mb-6 max-w-[250px]">
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </p>
              <button className="bg-[#FF6600] text-white px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-orange-600 transition-all">
                SHOP NOW <ArrowRight size={18} />
              </button>
            </div>
            <img
              src={Bluetooth}
              alt="Homepod"
              className="w-44 h-44 object-contain"
            />
          </div>

          {/* Xiaomi Banner */}
          <div className="bg-[#111827] rounded-xl p-8 flex items-center justify-between text-white relative overflow-hidden">
            <div className="z-10 flex-1">
              <span className="bg-[#FACC15] text-black text-[10px] font-bold px-2 py-1 rounded uppercase">
                Introducing New
              </span>
              <h2 className="text-3xl font-bold mt-4 mb-2 leading-tight">
                Xiaomi Mi 11 Ultra <br /> 12GB+256GB
              </h2>
              <p className="text-gray-400 text-xs mb-6">
                *Data provided by internal laboratories.
              </p>
              <button className="bg-[#FF6600] text-white px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-orange-600 transition-all">
                SHOP NOW <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-2 bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shadow-xl border-2 border-[#111827] z-20">
                $599
              </div>
              <img
                src={salom}
                alt="Xiaomi"
                className="w-32 object-contain"
              />
            </div>
          </div>
        </div>

        {/* NEW ARRIVALS */}
        <section>
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <div className="flex gap-4 text-sm font-medium text-gray-500 overflow-x-auto">
              <span className="text-orange-500 border-b-2 border-orange-500 pb-4 cursor-pointer">
                All
              </span>
              <span className="hover:text-orange-500 cursor-pointer whitespace-nowrap">
                Laptops
              </span>
              <span className="hover:text-orange-500 cursor-pointer whitespace-nowrap">
                Home Decoration
              </span>
              <span className="text-blue-500 cursor-pointer flex items-center gap-1 font-bold ml-4">
                Browse All Products <ChevronRight size={16} />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Products Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {allProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Sidebar Banners – o‘zgarishsiz qoladi */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-[#FFF6D4] rounded-lg p-6 flex flex-col items-center text-center">
                <img
                  src="https://dummyimage.com/100x100/000/fff&text=Earbuds"
                  alt="Earbuds"
                  className="w-20 mb-4"
                />
                <h4 className="font-bold text-[13px] mb-2">
                  Xiaomi True Wireless Earbuds
                </h4>
                <div className="text-xs mb-4">
                  Only for: <span className="bg-white px-2 py-1 rounded font-bold text-blue-600">
                    $299
                  </span>
                </div>
                <button className="w-full bg-[#FF6600] text-white py-2.5 rounded text-xs font-bold hover:bg-orange-600 transition-all uppercase">
                  Shop Now
                </button>
              </div>

              <div className="bg-[#0D3156] rounded-lg p-6 text-center text-white flex flex-col items-center">
                <span className="bg-white/10 text-blue-200 text-[10px] font-bold px-2 py-1 rounded uppercase mb-4">
                  Summer Sale
                </span>
                <h3 className="text-2xl font-black mb-1 leading-none">
                  37% DISCOUNT
                </h3>
                <p className="text-[10px] text-blue-200 mb-6 mt-2">
                  Only for <span className="text-yellow-400 font-bold">SmartPhone</span>
                </p>
                <button className="w-full bg-blue-500 text-white py-2.5 rounded text-xs font-bold hover:bg-blue-600 flex items-center justify-center gap-2">
                  Shop Now <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EcommercePage;