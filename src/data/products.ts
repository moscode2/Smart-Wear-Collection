export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  stock: number;
  rating: number;
  reviews: number;
  featured?: boolean;
  newArrival?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    category: "T-Shirts",
    images: [
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Premium quality cotton t-shirt with a modern fit. Perfect for everyday wear.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Gray"],
    stock: 150,
    rating: 4.5,
    reviews: 89,
    featured: true,
    newArrival: true
  },
  {
    id: "2",
    name: "Slim Fit Denim Jeans",
    price: 79.99,
    category: "Jeans",
    images: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Stylish slim fit jeans with stretch fabric for ultimate comfort.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Blue", "Black", "Light Blue"],
    stock: 85,
    rating: 4.7,
    reviews: 124,
    featured: true
  },
  {
    id: "3",
    name: "Casual Button-Down Shirt",
    price: 49.99,
    originalPrice: 69.99,
    category: "Shirts",
    images: [
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Versatile button-down shirt perfect for both casual and semi-formal occasions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Pink", "Black"],
    stock: 120,
    rating: 4.6,
    reviews: 67,
    newArrival: true
  },
  {
    id: "4",
    name: "Hooded Sweatshirt",
    price: 59.99,
    category: "Hoodies",
    images: [
      "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Cozy hooded sweatshirt with premium fleece lining.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy", "Burgundy"],
    stock: 95,
    rating: 4.8,
    reviews: 156,
    featured: true
  },
  {
    id: "5",
    name: "Leather Jacket",
    price: 199.99,
    originalPrice: 249.99,
    category: "Jackets",
    images: [
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Premium leather jacket with modern design and superior craftsmanship.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    stock: 45,
    rating: 4.9,
    reviews: 203,
    featured: true
  },
  {
    id: "6",
    name: "Chino Pants",
    price: 64.99,
    category: "Pants",
    images: [
      "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Classic chino pants with a tailored fit for a polished look.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Black", "Olive"],
    stock: 110,
    rating: 4.4,
    reviews: 78,
    newArrival: true
  },
  {
    id: "7",
    name: "Polo Shirt",
    price: 39.99,
    category: "Shirts",
    images: [
      "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Classic polo shirt with breathable fabric and modern fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Navy", "Red", "Green"],
    stock: 130,
    rating: 4.5,
    reviews: 92,
    newArrival: true
  },
  {
    id: "8",
    name: "Bomber Jacket",
    price: 129.99,
    category: "Jackets",
    images: [
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Trendy bomber jacket with ribbed cuffs and hem.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Navy"],
    stock: 60,
    rating: 4.7,
    reviews: 145
  }
];

export const categories = [
  "All",
  "T-Shirts",
  "Shirts",
  "Jeans",
  "Pants",
  "Hoodies",
  "Jackets"
];
