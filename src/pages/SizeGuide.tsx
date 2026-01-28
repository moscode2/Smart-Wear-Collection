import { motion } from "framer-motion";
import { Ruler, AlertCircle } from "lucide-react";
import Layout from "../components/Layout";
import { useState } from "react";

export default function SizeGuide() {
  const [selectedCategory, setSelectedCategory] = useState("mens");

  const malesSizes = [
    { size: "XS", chest: "33-35\"", waist: "28-30\"", length: "27\"" },
    { size: "S", chest: "35-37\"", waist: "30-32\"", length: "28\"" },
    { size: "M", chest: "37-40\"", waist: "32-35\"", length: "29\"" },
    { size: "L", chest: "40-43\"", waist: "35-38\"", length: "30\"" },
    { size: "XL", chest: "43-46\"", waist: "38-41\"", length: "31\"" },
    { size: "2XL", chest: "46-49\"", waist: "41-44\"", length: "32\"" }
  ];

  const womenSizes = [
    { size: "XS", bust: "31-32\"", waist: "23-24\"", length: "26\"" },
    { size: "S", bust: "32-34\"", waist: "24-26\"", length: "26.5\"" },
    { size: "M", bust: "34-36\"", waist: "26-28\"", length: "27\"" },
    { size: "L", bust: "36-38\"", waist: "28-30\"", length: "27.5\"" },
    { size: "XL", bust: "38-40\"", waist: "30-32\"", length: "28\"" },
    { size: "2XL", bust: "40-42\"", waist: "32-34\"", length: "28.5\"" }
  ];

  const shoesSizes = [
    { us: "5", eu: "35", length: "8.75\"" },
    { us: "6", eu: "36", length: "9.06\"" },
    { us: "7", eu: "37", length: "9.31\"" },
    { us: "8", eu: "38", length: "9.56\"" },
    { us: "9", eu: "39", length: "9.81\"" },
    { us: "10", eu: "40", length: "10.06\"" },
    { us: "11", eu: "41", length: "10.31\"" },
    { us: "12", eu: "42", length: "10.56\"" },
    { us: "13", eu: "43", length: "10.81\"" }
  ];

  const tips = [
    "Measure while wearing a comfortable, fitted t-shirt",
    "Keep the measuring tape relaxed and parallel to the ground",
    "Measure in inches or centimeters consistently",
    "For jackets and tops, add 1-2 inches for comfortable fit",
    "When in doubt between sizes, choose the larger size",
    "Always refer to our size chart, not traditional size labels"
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Size Guide</h1>
            <p className="text-lg text-gray-600">Find your perfect fit with our comprehensive sizing chart</p>
          </motion.div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12 flex gap-4">
            <Ruler className="h-6 w-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">How to Measure Yourself</h3>
              <p className="text-blue-800">Use a soft measuring tape and wear minimal clothing. Measurements should be snug but not tight. If you don't have a measuring tape, use a piece of string and measure it against a ruler.</p>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-4 mb-12">
            {[
              { id: "mens", label: "Men's Sizing" },
              { id: "womens", label: "Women's Sizing" },
              { id: "shoes", label: "Shoe Sizing" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  selectedCategory === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Size Charts */}
          {selectedCategory === "mens" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Size</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Chest</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Waist</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {malesSizes.map((size, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-semibold text-blue-600">{size.size}</td>
                        <td className="px-6 py-4 text-gray-700">{size.chest}</td>
                        <td className="px-6 py-4 text-gray-700">{size.waist}</td>
                        <td className="px-6 py-4 text-gray-700">{size.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {selectedCategory === "womens" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Size</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Bust</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Waist</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {womenSizes.map((size, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-semibold text-blue-600">{size.size}</td>
                        <td className="px-6 py-4 text-gray-700">{size.bust}</td>
                        <td className="px-6 py-4 text-gray-700">{size.waist}</td>
                        <td className="px-6 py-4 text-gray-700">{size.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {selectedCategory === "shoes" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">US Size</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">EU Size</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shoesSizes.map((size, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50 transition">
                        <td className="px-6 py-4 font-semibold text-blue-600">{size.us}</td>
                        <td className="px-6 py-4 text-gray-700">{size.eu}</td>
                        <td className="px-6 py-4 text-gray-700">{size.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Tips */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Measurement Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="text-blue-600 font-bold flex-shrink-0">✓</div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 flex gap-4">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Fit Varies by Product</h3>
              <p className="text-amber-800">Some items may fit differently due to style and fabric. Always check individual product descriptions for fit notes. If you're unsure, contact our support team for personalized recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
