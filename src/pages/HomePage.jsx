// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import { useStateContext } from '../context/CartWishlistContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SummerSalesSection from '../components/SummerSalesSection';
import BestDeals from '../components/BestDeals';
import FullEcommercePage from '../components/FullEcommercePage';
import EcommerceFullPage from '../components/EcommerceFullPage';

const HomePage = () => {
  // AOS animatsiyalarini ishga tushirish
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ===== SUMMER SALES SECTION ===== */}
      <SummerSalesSection/>

      {/* ===== BEST DEALS SECTION ===== */}
      <BestDeals/>

      {/* ===== SHOP WITH CATEGORIES & FEATURED PRODUCTS ===== */}
      <FullEcommercePage/>

      {/* ===== INTRODUCING / NEW PRODUCTS SECTION ===== */}
      <EcommerceFullPage/>
    </>
  );
};

export default HomePage;