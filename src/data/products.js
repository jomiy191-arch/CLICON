// src/data/products.js
import xboxImg from '../assets/Images/eyeshadow-palette.svg';
import homepodImg from '../assets/Images/homepod-mini.svg';
import laptopImg from '../assets/Images/gaming-laptop.svg';
import mi11Img from '../assets/Images/mi-11-ultra.svg';
import powderImg from '../assets/Images/Image (5).svg';
import eyeshadowImg from '../assets/Images/eyeshadow-palette.svg';
import image3 from '../assets/Images/Image (3).svg';
import image4 from '../assets/Images/Image (4).svg';
import image5 from '../assets/Images/Image (5).svg';
import image6 from '../assets/Images/Image (6).svg';
import image7 from '../assets/Images/Image (7).svg';
import image8 from '../assets/Images/Image (8).svg';
import image9 from '../assets/Images/Image (9).svg';

export const products = [
  { id: 'xbox-1', name: 'Xbox Series S', slug: 'xbox-series-s', price: 299, oldPrice: 299, images: [xboxImg], rating: 5, reviews: 0, category: 'Gaming' },
  { id: 'app-1', name: 'HomePod Mini', slug: 'homepod-mini', price: 99, oldPrice: 119, images: [homepodImg], rating: 5, reviews: 0, category: 'Electronics' },
  { id: 'comp-1', name: 'Gaming Laptop', slug: 'gaming-laptop', price: 1200, oldPrice: 1764, images: [laptopImg], rating: 4, reviews: 0, category: 'Laptops' },
  { id: 'xiao-1', name: 'Xiaomi Mi 11 Ultra', slug: 'mi-11-ultra', price: 590, oldPrice: 699, images: [mi11Img], rating: 4, reviews: 0, category: 'Smartphones' },
  { id: 'pow-1', name: 'Powder Canister', slug: 'powder-canister', price: 13.51, oldPrice: 14.99, images: [powderImg], rating: 5, reviews: 3, category: 'Beauty' },
  { id: 'eye-1', name: 'Eyeshadow Palette', slug: 'eyeshadow-palette', price: 16.35, oldPrice: 49.99, images: [eyeshadowImg], rating: 4, reviews: 7, category: 'Beauty' },
  { id: 'img3', name: 'Product 7', slug: 'product-7', price: 45, oldPrice: 55, images: [image3], rating: 4, reviews: 2, category: 'Misc' },
  { id: 'img4', name: 'Product 8', slug: 'product-8', price: 59, oldPrice: 79, images: [image4], rating: 5, reviews: 4, category: 'Misc' },
];