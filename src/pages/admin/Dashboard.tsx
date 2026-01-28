import { motion } from "framer-motion";
import { BarChart3, Package, ShoppingCart, TrendingUp, Users } from "lucide-react";
import Layout from "../../components/Layout";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Sales",
      value: "$45,280",
      change: "+12.5%",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Total Orders",
      value: "1,248",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Products",
      value: "324",
      change: "+5 new",
      icon: Package,
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Customers",
      value: "892",
      change: "+4.3%",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", amount: "$129.99", status: "Shipped", date: "2024-01-15" },
    { id: "ORD-002", customer: "Jane Smith", amount: "$89.99", status: "Pending", date: "2024-01-14" },
    { id: "ORD-003", customer: "Mike Johnson", amount: "$199.99", status: "Delivered", date: "2024-01-13" },
    { id: "ORD-004", customer: "Sarah Williams", amount: "$149.99", status: "Processing", date: "2024-01-13" },
    { id: "ORD-005", customer: "Tom Brown", amount: "$79.99", status: "Shipped", date: "2024-01-12" }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your store and view analytics</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">{stat.value}</h2>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                      {stat.change}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Order ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Customer</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">{order.id}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{order.customer}</td>
                        <td className="py-3 px-4 text-sm font-semibold text-gray-900">{order.amount}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            order.status === "Delivered" ? "bg-green-100 text-green-800" :
                            order.status === "Shipped" ? "bg-blue-100 text-blue-800" :
                            order.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <a href="/admin/products" className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition block text-center">
                  Manage Products
                </a>
                <a href="/admin/orders" className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition block text-center">
                  View All Orders
                </a>
                <button className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition">
                  Export Report
                </button>
                <button className="w-full px-4 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition">
                  View Analytics
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}