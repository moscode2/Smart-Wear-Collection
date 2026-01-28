import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Download, Filter } from "lucide-react";
import Layout from "../../components/Layout";

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      customer: "John Doe",
      email: "john@example.com",
      total: 129.99,
      status: "Delivered",
      date: "2024-01-15",
      items: 2,
      address: "123 Main St, New York"
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      email: "jane@example.com",
      total: 89.99,
      status: "Shipped",
      date: "2024-01-14",
      items: 1,
      address: "456 Oak Ave, Los Angeles"
    },
    {
      id: "ORD-003",
      customer: "Mike Johnson",
      email: "mike@example.com",
      total: 199.99,
      status: "Processing",
      date: "2024-01-13",
      items: 3,
      address: "789 Pine Rd, Chicago"
    },
    {
      id: "ORD-004",
      customer: "Sarah Williams",
      email: "sarah@example.com",
      total: 149.99,
      status: "Pending",
      date: "2024-01-12",
      items: 2,
      address: "321 Elm St, Houston"
    },
    {
      id: "ORD-005",
      customer: "Tom Brown",
      email: "tom@example.com",
      total: 79.99,
      status: "Delivered",
      date: "2024-01-11",
      items: 1,
      address: "654 Maple Dr, Phoenix"
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);
  const [statusFilter, setStatusFilter] = useState("All");

  const statusOptions = ["All", "Pending", "Processing", "Shipped", "Delivered"];
  const filteredOrders = statusFilter === "All" ? orders : orders.filter(o => o.status === statusFilter);

  const updateOrderStatus = (id: string, newStatus: string) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Order Management</h1>
            <p className="text-gray-600 mt-2">Track and manage all customer orders</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filter by Status:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map(status => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    statusFilter === status
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Order ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Customer</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Total</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Items</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                    <td className="py-4 px-6 font-semibold text-gray-900">{order.id}</td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{order.customer}</p>
                        <p className="text-sm text-gray-600">{order.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900">${order.total.toFixed(2)}</td>
                    <td className="py-4 px-6 text-gray-600">{order.items}</td>
                    <td className="py-4 px-6">
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className={`px-3 py-1 rounded-lg text-sm font-semibold border-0 cursor-pointer ${
                          order.status === "Delivered" ? "bg-green-100 text-green-800" :
                          order.status === "Shipped" ? "bg-blue-100 text-blue-800" :
                          order.status === "Processing" ? "bg-yellow-100 text-yellow-800" :
                          "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-sm">{order.date}</td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded transition"
                          title="View details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          className="p-2 text-green-600 hover:bg-green-50 rounded transition"
                          title="Download invoice"
                        >
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {selectedOrder && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setSelectedOrder(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Details - {selectedOrder.id}</h2>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Customer</p>
                    <p className="font-semibold text-gray-900">{selectedOrder.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">{selectedOrder.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Order Date</p>
                    <p className="font-semibold text-gray-900">{selectedOrder.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold inline-block ${
                      selectedOrder.status === "Delivered" ? "bg-green-100 text-green-800" :
                      selectedOrder.status === "Shipped" ? "bg-blue-100 text-blue-800" :
                      selectedOrder.status === "Processing" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {selectedOrder.status}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Shipping Address</h3>
                  <p className="text-gray-600">{selectedOrder.address}</p>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Items Ordered</span>
                    <span className="font-semibold text-gray-900">{selectedOrder.items}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">${(selectedOrder.total * 0.9).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-2 mt-2">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">${selectedOrder.total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedOrder(null)}
                  className="w-full mt-6 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}