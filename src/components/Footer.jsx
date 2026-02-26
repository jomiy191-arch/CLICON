import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">CLICON</h3>
            <p className="text-sm">Welcome to Clicon online eCommerce store. We provide the best products at the best prices.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
              <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
              <li><Link to="/track-order" className="hover:text-white">Track Order</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/beauty" className="hover:text-white">Beauty</Link></li>
              <li><Link to="/category/electronics" className="hover:text-white">Electronics</Link></li>
              <li><Link to="/category/gaming" className="hover:text-white">Gaming</Link></li>
              <li><Link to="/category/smartphones" className="hover:text-white">Smartphones</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 +1-202-555-0104</li>
              <li>✉️ support@clicon.com</li>
              <li>📍 123 Commerce St, NY</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>© 2025 CLICON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;