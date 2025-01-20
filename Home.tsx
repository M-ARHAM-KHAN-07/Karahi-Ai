import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import DishCard from '../components/DishCard';

const featuredDishes = [
  {
    id: 1,
    name: "Spicy Thai Basil Noodles",
    description: "Fresh rice noodles stir-fried with Thai basil, chili, and seasonal vegetables",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Mains",
    rating: 4.8,
    tags: ["Spicy", "Thai", "Noodles"]
  },
  {
    id: 2,
    name: "Mediterranean Bowl",
    description: "Fresh quinoa bowl with falafel, hummus, and grilled vegetables",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Mains",
    rating: 4.6,
    tags: ["Vegetarian", "Healthy", "Mediterranean"]
  },
  {
    id: 3,
    name: "Classic Burger",
    description: "Premium beef patty with cheese, lettuce, tomato, and special sauce",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Mains",
    rating: 4.7,
    tags: ["Burger", "American", "Classic"]
  }
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Your Perfect Meal
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Let our AI-powered platform suggest dishes based on your unique taste preferences
          </p>
          
          {/* Search Bar */}
          <div className="flex max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex-1 px-6 py-4 flex items-center">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your food preferences (e.g., Spicy, Vegan, Seafood)"
                className="ml-3 flex-1 focus:outline-none"
              />
            </div>
            <button className="px-6 py-4 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
              Search
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex space-x-4">
            <Link
              to="/menu"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center"
            >
              Start Your Order
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/recommendations"
              className="px-6 py-3 bg-white text-orange-500 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Dishes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              onAddToCart={(dish) => console.log('Added to cart:', dish)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}