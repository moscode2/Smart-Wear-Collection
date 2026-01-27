import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Smart Wear
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your destination for smart, trendy, and affordable fashion. Elevate your style with our curated collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="hover:text-purple-400 transition">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-purple-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500 text-sm"
              />
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-r-md transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; 2024 Smart Wear Collection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
