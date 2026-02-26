import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';

  // Filter products based on query (case‑insensitive match in name, description, category)
  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase().trim();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      (product.description && product.description.toLowerCase().includes(lowerQuery)) ||
      (product.category && product.category.toLowerCase().includes(lowerQuery))
    );
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-[60vh]">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Search size={24} /> Search Results
        </h1>
        <p className="text-gray-600 mt-1">
          {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for "{query}"
        </p>
      </div>

      {/* Results grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <Search size={48} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">No products found</h2>
          <p className="text-gray-500 mb-6">
            We couldn't find any products matching "{query}".
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;