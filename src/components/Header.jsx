import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/CartWishlistContext";
import Logo from "../assets/Images/powder-canister.svg";
import {
  Heart,
  ShoppingCart,
  Search,
  ChevronDown,
  Globe,
  DollarSign,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
  User,
} from "lucide-react";

const Header = () => {
  const { state } = useStateContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("Eng");
  const [currency, setCurrency] = useState("USD");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const cartCount = state.cart.reduce((acc, item) => acc + item.qty, 0);
  const wishCount = state.wishlist.length;

  // Scroll hide/show and background change
  useEffect(() => {
    const controlHeader = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScroll);
      setScrolled(currentScroll > 20);
    };
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    setSearchTerm("");
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-blue-800 backdrop-blur-md shadow-md"
            : "bg-blue-200 backdrop-blur-sm"
        }`}
      >
        {/* Top bar */}
        <div className="hidden lg:flex justify-between items-center px-8 py-2 text-sm text-gray-700">
          <div className="flex items-center gap-4">
            <span className="bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold text-xs">
              HOT
            </span>
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-orange-500 transition">
                <Facebook size={14} />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Twitter size={14} />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <Instagram size={14} />
              </a>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <button
              onClick={() => setLang(lang === "Eng" ? "UZ" : "Eng")}
              className="flex items-center gap-1 hover:text-orange-500 transition"
            >
              <Globe size={14} /> {lang}
            </button>
            <button
              onClick={() => setCurrency(currency === "USD" ? "EUR" : "USD")}
              className="flex items-center gap-1 hover:text-orange-500 transition"
            >
              <DollarSign size={14} /> {currency}
            </button>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={Logo} alt="Clicon" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-orange-500 font-medium transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium">
                Categories <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    to="/category/electronics"
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Electronics
                  </Link>
                  <Link
                    to="/category/beauty"
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Beauty
                  </Link>
                  <Link
                    to="/category/fashion"
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Fashion
                  </Link>
                  <Link
                    to="/category/home"
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Home & Living
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop search */}
          <form
            onSubmit={handleSearch}
            className="hidden lg:flex flex-1 max-w-md items-center"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-full py-2.5 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-orange-500 transition"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <Link
              to="/wishlist"
              className="relative p-2 hover:bg-orange-50 rounded-full transition"
            >
              <Heart size={20} className="text-gray-700" />
              {wishCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishCount}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="relative p-2 hover:bg-orange-50 rounded-full transition"
            >
              <ShoppingCart size={20} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <a
              href="tel:+1-202-555-0104"
              className="hidden lg:block p-2 hover:bg-orange-50 rounded-full transition"
            >
              <Phone size={20} className="text-gray-700" />
            </a>
            <Link
              to="/account"
              className="hidden lg:block p-2 hover:bg-orange-50 rounded-full transition"
            >
              <User size={20} className="text-gray-700" />
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 hover:bg-orange-50 rounded-full transition"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 flex justify-between items-center border-b">
            <span className="font-bold text-lg">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="p-4 border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2 text-gray-400">
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* Mobile Links */}
          <nav className="p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-2 px-3 hover:bg-orange-50 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <p className="text-xs text-gray-500 mb-2">Categories</p>
              <Link
                to="/category/electronics"
                className="block py-2 px-3 hover:bg-orange-50 rounded-lg"
              >
                Electronics
              </Link>
              <Link
                to="/category/beauty"
                className="block py-2 px-3 hover:bg-orange-50 rounded-lg"
              >
                Beauty
              </Link>
              <Link
                to="/category/fashion"
                className="block py-2 px-3 hover:bg-orange-50 rounded-lg"
              >
                Fashion
              </Link>
              <Link
                to="/category/home"
                className="block py-2 px-3 hover:bg-orange-50 rounded-lg"
              >
                Home & Living
              </Link>
            </div>
          </nav>

          {/* Mobile Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50 flex justify-between text-sm">
            <button className="flex items-center gap-1">
              <Globe size={16} /> {lang}
            </button>
            <button className="flex items-center gap-1">
              <DollarSign size={16} /> {currency}
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content hiding under fixed header */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
};

export default Header;