import { useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const allColors = ["Black", "White", "Navy", "Gray", "Blue", "Red", "Green"];

  // Filter products
  let filteredProducts = products.filter((product) => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedSizes.length > 0 && !selectedSizes.some(size => product.sizes.includes(size))) return false;
    if (selectedColors.length > 0 && !selectedColors.some(color => product.colors.includes(color))) return false;
    return true;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
      default:
        return 0;
    }
  });

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setPriceRange([0, 300]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shop All Products</h1>
            <p className="text-gray-600">Discover our complete collection of trendy fashion</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-gray-900">Filters</h2>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-purple-600 hover:text-purple-700"
                  >
                    Clear All
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition ${
                          selectedCategory === category
                            ? "bg-purple-100 text-purple-600 font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Sizes */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {allSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-1 rounded-md border transition ${
                          selectedSizes.includes(size)
                            ? "bg-purple-600 text-white border-purple-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-purple-600"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {allColors.map((color) => (
                      <button
                        key={color}
                        onClick={() => toggleColor(color)}
                        className={`px-3 py-1 rounded-md border transition ${
                          selectedColors.includes(color)
                            ? "bg-purple-600 text-white border-purple-600"
                            : "bg-white text-gray-700 border-gray-300 hover:border-purple-600"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                  </button>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products found
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="lg:hidden bg-white rounded-lg shadow-sm p-6 mb-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-semibold text-gray-900">Filters</h2>
                    <button onClick={() => setShowFilters(false)}>
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Same filters as desktop */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Category</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`block w-full text-left px-3 py-2 rounded-md transition ${
                              selectedCategory === category
                                ? "bg-purple-100 text-purple-600 font-medium"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Size</h3>
                      <div className="flex flex-wrap gap-2">
                        {allSizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => toggleSize(size)}
                            className={`px-3 py-1 rounded-md border transition ${
                              selectedSizes.includes(size)
                                ? "bg-purple-600 text-white border-purple-600"
                                : "bg-white text-gray-700 border-gray-300 hover:border-purple-600"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Color</h3>
                      <div className="flex flex-wrap gap-2">
                        {allColors.map((color) => (
                          <button
                            key={color}
                            onClick={() => toggleColor(color)}
                            className={`px-3 py-1 rounded-md border transition ${
                              selectedColors.includes(color)
                                ? "bg-purple-600 text-white border-purple-600"
                                : "bg-white text-gray-700 border-gray-300 hover:border-purple-600"
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <p className="text-gray-600 mb-4">No products found matching your filters.</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
