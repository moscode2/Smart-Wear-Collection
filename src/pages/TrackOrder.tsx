import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Truck, CheckCircle, Clock, AlertCircle } from "lucide-react";
import Layout from "../components/Layout";

export default function TrackOrder() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState("");

  // Mock order tracking data
  const mockOrders: Record<string, any> = {
    "ORD-2024001": {
      orderNumber: "ORD-2024001",
      status: "delivered",
      items: [
        { name: "Premium Athletic Jacket", quantity: 1, price: 7999 },
        { name: "Classic Denim Jeans", quantity: 1, price: 5999 }
      ],
      total: 15298,
      ordered: "Jan 15, 2024",
      delivered: "Jan 20, 2024",
      trackingNumber: "KE123456789",
      timeline: [
        { status: "Order Placed", date: "Jan 15, 2024 10:30 AM", completed: true },
        { status: "Processing", date: "Jan 15, 2024 2:00 PM", completed: true },
        { status: "Shipped", date: "Jan 16, 2024 9:00 AM", completed: true },
        { status: "In Transit", date: "Jan 16-19, 2024", completed: true },
        { status: "Delivered", date: "Jan 20, 2024 3:45 PM", completed: true }
      ]
    },
    "ORD-2024002": {
      orderNumber: "ORD-2024002",
      status: "in_transit",
      items: [
        { name: "Running Sneakers", quantity: 1, price: 8999 }
      ],
      total: 8999,
      ordered: "Jan 22, 2024",
      estimatedDelivery: "Jan 25, 2024",
      trackingNumber: "KE987654321",
      timeline: [
        { status: "Order Placed", date: "Jan 22, 2024 11:15 AM", completed: true },
        { status: "Processing", date: "Jan 22, 2024 3:00 PM", completed: true },
        { status: "Shipped", date: "Jan 23, 2024 8:00 AM", completed: true },
        { status: "In Transit", date: "Jan 23-25, 2024", completed: true },
        { status: "Delivered", date: "Expected Jan 25, 2024", completed: false }
      ]
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTracking = trackingNumber.trim().toUpperCase();

    if (!trimmedTracking) {
      setError("Please enter an order number or tracking number");
      setOrderData(null);
      return;
    }

    const found = Object.values(mockOrders).find(
      (order: any) => order.orderNumber === trimmedTracking || order.trackingNumber === trimmedTracking
    );

    if (found) {
      setOrderData(found);
      setError("");
    } else {
      setError("Order not found. Please check your order number or tracking number.");
      setOrderData(null);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case "in_transit":
        return <Truck className="h-6 w-6 text-blue-600" />;
      case "processing":
        return <Clock className="h-6 w-6 text-yellow-600" />;
      default:
        return <Package className="h-6 w-6 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return { bg: "bg-green-100", text: "text-green-800", label: "Delivered" };
      case "in_transit":
        return { bg: "bg-blue-100", text: "text-blue-800", label: "In Transit" };
      case "processing":
        return { bg: "bg-yellow-100", text: "text-yellow-800", label: "Processing" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-800", label: "Pending" };
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Order</h1>
            <p className="text-lg text-gray-600">Enter your order or tracking number to see real-time updates</p>
          </motion.div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <div className="flex gap-3">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter order number (ORD-XXXXXX) or tracking number (KEXXXXXXXXX)"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition"
              >
                Track
              </button>
            </div>
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800">{error}</p>
              </div>
            )}
          </form>

          {/* Sample Tracking Numbers */}
          {!orderData && !error && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <p className="text-blue-900 font-medium mb-3">Try these sample order numbers:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setTrackingNumber("ORD-2024001");
                    setOrderData(mockOrders["ORD-2024001"]);
                    setError("");
                  }}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
                >
                  ORD-2024001 (Delivered)
                </button>
                <button
                  onClick={() => {
                    setTrackingNumber("ORD-2024002");
                    setOrderData(mockOrders["ORD-2024002"]);
                    setError("");
                  }}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
                >
                  ORD-2024002 (In Transit)
                </button>
              </div>
            </div>
          )}

          {/* Order Details */}
          {orderData && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {/* Status Header */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Order Number</p>
                    <p className="text-2xl font-bold text-gray-900">{orderData.orderNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Tracking Number</p>
                    <p className="text-lg font-mono text-gray-900">{orderData.trackingNumber}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-2">Status</p>
                    <div className={`px-4 py-2 rounded-full font-semibold ${getStatusBadge(orderData.status).bg} ${getStatusBadge(orderData.status).text}`}>
                      {getStatusBadge(orderData.status).label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Delivery Timeline</h2>
                <div className="space-y-6">
                  {orderData.timeline.map((event: any, index: number) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          event.completed ? "bg-green-100" : "bg-gray-100"
                        }`}>
                          {event.completed ? (
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          ) : (
                            <Clock className="h-6 w-6 text-gray-400" />
                          )}
                        </div>
                        {index < orderData.timeline.length - 1 && (
                          <div className={`w-1 h-12 ${event.completed ? "bg-green-200" : "bg-gray-200"}`} />
                        )}
                      </div>
                      <div className="pb-6">
                        <h3 className={`text-lg font-semibold ${event.completed ? "text-gray-900" : "text-gray-500"}`}>
                          {event.status}
                        </h3>
                        <p className={`text-sm ${event.completed ? "text-gray-600" : "text-gray-400"}`}>
                          {event.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Items */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Items</h2>
                <div className="space-y-4">
                  {orderData.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-gray-900">KSh {item.price.toLocaleString()}</p>
                    </div>
                  ))}
                  <div className="border-t pt-4 flex justify-between items-center">
                    <p className="font-semibold text-gray-900">Order Total</p>
                    <p className="text-2xl font-bold text-blue-600">KSh {orderData.total.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-700 mb-4">If you have any questions about your order or delivery, don't hesitate to contact our support team.</p>
                <a href="/contact" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Contact Support
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}
