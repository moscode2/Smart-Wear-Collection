export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  gender: string;
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
    price: 1500,
    originalPrice: 1800,
    category: "T-Shirts",
    gender: "Mens",
    images: [
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800"
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
    price: 1800,
    category: "Jeans",
    gender: "Mens",
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
    price: 1600,
    originalPrice: 1750,
    category: "Shirts",
    gender: "Mens",
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
    price: 1200,
    category: "Hoodies",
    gender: "Unisex",
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
    price: 2500,
    originalPrice: 2800,
    category: "Jackets",
    gender: "Mens",
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
    price: 640,
    category: "Pants",
    gender: "Mens",
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
    price: 1800,
    category: "Shirts",
    gender: "Mens",
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
    price: 1750,
    category: "Jackets",
    gender: "Mens",
    images: [
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Trendy bomber jacket with ribbed cuffs and hem.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive", "Navy"],
    stock: 60,
    rating: 4.7,
    reviews: 145
  },
  {
    id: "9",
    name: "Women's Floral Dress",
    price: 1000,
    originalPrice: 1200,
    category: "Dresses",
    gender: "Womens",
    images: [
      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Elegant floral dress perfect for any occasion with comfortable fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral", "Blue", "Red"],
    stock: 75,
    rating: 4.6,
    reviews: 98,
    featured: true,
    newArrival: true
  },
  {
    id: "10",
    name: "Women's Skinny Jeans",
    price: 800,
    category: "Jeans",
    gender: "Womens",
    images: [
      "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Flattering skinny jeans with stretch fabric for comfort and style.",
    sizes: ["24", "25", "26", "27", "28", "29", "30"],
    colors: ["Dark Blue", "Black", "Medium Blue"],
    stock: 92,
    rating: 4.7,
    reviews: 115,
    featured: true
  },
  {
    id: "11",
    name: "Women's Blouse",
    price: 1500,
    originalPrice: 1850,
    category: "Shirts",
    gender: "Womens",
    images: [
      "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Sophisticated blouse with delicate details for professional and casual wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Cream"],
    stock: 105,
    rating: 4.5,
    reviews: 82,
    newArrival: true
  },
  {
    id: "12",
    name: "Women's Sports Leggings",
    price: 450,
    category: "Leggings",
    gender: "Womens",
    images: [
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "High-waist sports leggings with moisture-wicking technology.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
    stock: 140,
    rating: 4.8,
    reviews: 167,
    featured: true
  },
  {
    id: "13",
    name: "Women's Leather Jacket",
    price: 1700,
    category: "Jackets",
    gender: "Womens",
    images: [
      "https://images.pexels.com/photos/984299/pexels-photo-984299.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Stylish women's leather jacket with sleek design.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    stock: 55,
    rating: 4.7,
    reviews: 134,
    newArrival: true
  },
  {
    id: "14",
    name: "Women's Cardigan",
    price: 640,
    category: "Cardigans",
    gender: "Womens",
    images: [
      "https://images.pexels.com/photos/3775857/pexels-photo-3775857.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Cozy cardigan perfect for layering in any season.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Beige", "Gray", "Charcoal"],
    stock: 85,
    rating: 4.6,
    reviews: 76
  },
  {
    id: "15",
    name: "Kids T-Shirt",
    price: 1200,
    category: "T-Shirts",
    gender: "Kids",
    images: [
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Comfortable kids t-shirt made from soft cotton.",
    sizes: ["4", "6", "8", "10", "12"],
    colors: ["Red", "Blue", "Yellow", "Green"],
    stock: 180,
    rating: 4.5,
    reviews: 54,
    newArrival: true
  },
  {
    id: "16",
    name: "Kids Hoodie",
    price: 1400,
    category: "Hoodies",
    gender: "Kids",
    images: [
      "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Warm and cozy hoodie for kids with fun designs.",
    sizes: ["4", "6", "8", "10", "12"],
    colors: ["Blue", "Gray", "Black"],
    stock: 120,
    rating: 4.7,
    reviews: 89,
    featured: true
  }
];

export const categories = [
  "All",
  "T-Shirts",
  "Shirts",
  "Jeans",
  "Pants",
  "Hoodies",
  "Jackets",
  "Dresses",
  "Leggings",
  "Cardigans"
];

export const genders = [
  "All",
  "Mens",
  "Womens",
  "Kids"
];
