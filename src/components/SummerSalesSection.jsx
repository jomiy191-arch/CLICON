import React from 'react';
import Game from "../assets/Images/gaming-laptop.svg"
import image from "../assets/Images/image 5.svg"
import xbox from "../assets/Images/xbox-console.svg"
import { 
  ArrowRight, 
  Package, 
  Trophy, 
  CreditCard, 
  Headphones 
} from 'lucide-react';

const SummerSalesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-sans bg-white">
      {/* 1. ASOSIY GRID: BANNERLAR */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        
        {/* CHAP TOMON: KATTA XBOX BANNERI */}
        <div className="lg:col-span-2 bg-[#F2F4F5] rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group">
          <div className="z-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#2DA5F3] text-sm font-bold mb-4">
              <span className="w-8 h-[2px] bg-[#2DA5F3]"></span>
              THE BEST PLACE TO PLAY
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#191C1F] mb-4">
              Xbox Consoles
            </h2>
            <p className="text-[#475156] text-lg mb-8 max-w-[320px] leading-relaxed">
              Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.
            </p>
            <button className="bg-[#FA8232] hover:bg-[#e67329] text-white px-8 py-4 rounded-md font-bold flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 mx-auto md:mx-0">
              SHOP NOW <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="relative mt-8 md:mt-0 z-10">
            {/* Rasm joyi: O'zingizning rasm manzilingizni qo'ying */}
            <img 
              src={Game}
              alt="Xbox Console" 
              className="w-72 h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:rotate-2"
            />
            {/* Narx belgisi (Badge) */}
            <div className="absolute -top-6 -right-4 bg-[#2DA5F3] text-white w-20 h-20 rounded-full flex flex-col items-center justify-center font-bold text-xl border-4 border-white shadow-lg">
              <span className="text-sm leading-none">$</span>299
            </div>
          </div>
        </div>

        {/* O'NG TOMON: IKKITA KICHIK BANNER */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* TEPADAGI: GOOGLE PIXEL (QORA) */}
          <div className="bg-[#191C1F] rounded-lg p-8 flex items-center justify-between overflow-hidden relative group h-full">
            <div className="z-10">
              <span className="text-[#EBC80E] text-xs font-bold uppercase tracking-wider">Summer Sales</span>
              <h3 className="text-white text-2xl font-bold mt-2 mb-6 leading-tight">
                New Google <br /> Pixel 6 Pro
              </h3>
              <button className="bg-[#FA8232] text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 text-sm hover:bg-[#e67329] transition-colors">
                SHOP NOW <ArrowRight size={18} />
              </button>
            </div>
            <img 
              src={image}
              alt="Pixel 6 Pro" 
              className="w-44 object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-5 right-5 bg-[#EFD33D] text-[#191C1F] px-3 py-1.5 rounded-sm font-bold text-xs shadow-md">
              29% OFF
            </div>
          </div>

          {/* PASTIDAGI: XIAOMI FLIPBUDS (OCH KULRANG) */}
          <div className="bg-[#F2F4F5] rounded-lg p-8 flex items-center gap-6 border border-gray-100 h-full group">
            <div className="w-1/3">
              <img 
                src={xbox} 
                alt="Xiaomi FlipBuds" 
                className="w-full object-contain transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>
            <div className="w-2/3">
              <h3 className="text-[#191C1F] text-xl font-bold mb-1">Xiaomi FlipBuds Pro</h3>
              <p className="text-[#2DA5F3] font-bold mb-5 text-xl">$299 USD</p>
              <button className="bg-[#FA8232] text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 text-sm hover:bg-[#e67329] transition-all">
                SHOP NOW <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>

     </section>
  );
};

export default SummerSalesSection;