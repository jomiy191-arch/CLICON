import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import SearchPage from "./pages/SearchPage";
import Loader from "./components/Loader"; // <-- import
import "./App.css";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Sahifa o‘zgarganda loader
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600); // 0.6s loader
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Header />
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;