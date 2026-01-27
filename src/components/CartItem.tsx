import { Trash2 } from "lucide-react";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({
  id,
  name,
  price,
  image,
  size,
  color,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">
          Size: {size} | Color: {color}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
            className="w-8 h-8 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <button
            onClick={() => onUpdateQuantity(id, quantity + 1)}
            className="w-8 h-8 rounded-md border border-gray-300 hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => onRemove(id)}
          className="text-gray-400 hover:text-red-600 transition"
        >
          <Trash2 className="h-5 w-5" />
        </button>
        <p className="text-lg font-bold text-gray-900">
          ${(price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
