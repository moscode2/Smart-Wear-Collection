import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "../data/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.newArrival && (
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                New
              </span>
            )}
            {discount > 0 && (
              <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                -{discount}%
              </span>
            )}
          </div>

          {/* Quick actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-purple-600 hover:text-white transition">
              <Heart className="h-4 w-4" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-purple-600 hover:text-white transition">
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Colors */}
          <div className="flex gap-1 mt-3">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border-2 border-gray-300"
                style={{
                  backgroundColor: color.toLowerCase() === "white" ? "#ffffff" : 
                                 color.toLowerCase() === "black" ? "#000000" :
                                 color.toLowerCase() === "navy" ? "#001f3f" :
                                 color.toLowerCase() === "gray" ? "#808080" :
                                 color.toLowerCase() === "blue" ? "#0074D9" :
                                 color.toLowerCase() === "light blue" ? "#7FDBFF" :
                                 color.toLowerCase() === "pink" ? "#F012BE" :
                                 color.toLowerCase() === "burgundy" ? "#85144b" :
                                 color.toLowerCase() === "brown" ? "#8B4513" :
                                 color.toLowerCase() === "khaki" ? "#C3B091" :
                                 color.toLowerCase() === "olive" ? "#3D9970" :
                                 color.toLowerCase() === "red" ? "#FF4136" :
                                 color.toLowerCase() === "green" ? "#2ECC40" :
                                 "#cccccc"
                }}
                title={color}
              />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
