import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import Layout from "../../components/Layout";

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Athletic Jacket", category: "Mens", price: 79.99, stock: 45, image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { id: 2, name: "Denim Jeans", category: "Womens", price: 59.99, stock: 32, image: "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { id: 3, name: "Sports T-shirt", category: "Unisex", price: 29.99, stock: 78, image: "https://images.pexels.com/photos/991537/pexels-photo-991537.jpeg?auto=compress&cs=tinysrgb&w=200" }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "Mens",
    price: "",
    stock: "",
    image: ""
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddProduct = () => {
    setEditingId(null);
    setFormData({ name: "", category: "Mens", price: "", stock: "", image: "" });
    setShowModal(true);
  };

  const handleEditProduct = (product: typeof products[0]) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString(),
      image: product.image
    });
    setShowModal(true);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setProducts(products.map(p =>
        p.id === editingId
          ? { ...p, name: formData.name, category: formData.category, price: parseFloat(formData.price), stock: parseInt(formData.stock) }
          : p
      ));
    } else {
      setProducts([...products, {
        id: Math.max(...products.map(p => p.id), 0) + 1,
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        image: formData.image
      }]);
    }
    setShowModal(false);
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Product Management</h1>
                <p className="text-gray-600 mt-2">Add, edit, or delete products</p>
              </div>
              <button
                onClick={handleAddProduct}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition flex items-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Add Product
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Product</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Category</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Price</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Stock</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                        <div>
                          <p className="font-semibold text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-600">ID: {product.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{product.category}</td>
                    <td className="py-4 px-6 font-semibold text-gray-900">${product.price.toFixed(2)}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.stock > 20 ? "bg-green-100 text-green-800" :
                        product.stock > 10 ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded transition"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{editingId ? "Edit Product" : "Add New Product"}</h2>
                <form onSubmit={handleSaveProduct} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Product name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Mens</option>
                    <option>Womens</option>
                    <option>Kids</option>
                    <option>Unisex</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Stock quantity"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}