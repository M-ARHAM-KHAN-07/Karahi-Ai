import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import DishCard from '../components/DishCard';
import { Dish } from '../types';

const menuItems: Dish[] = [
  // Appetizers
  {
    id: 4,
    name: "Crispy Spring Rolls",
    description: "Vegetable spring rolls served with sweet chili sauce",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Appetizers",
    rating: 4.5,
    tags: ["Vegetarian", "Crispy", "Asian"]
  },
  {
    id: 5,
    name: "Bruschetta",
    description: "Toasted bread topped with fresh tomatoes, garlic, and basil",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Appetizers",
    rating: 4.3,
    tags: ["Vegetarian", "Italian"]
  },
  // Mains
  {
    id: 6,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with lemon herb butter",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Mains",
    rating: 4.9,
    tags: ["Seafood", "Healthy", "Grilled"]
  },
  {
    id: 7,
    name: "Mushroom Risotto",
    description: "Creamy Arborio rice with wild mushrooms and parmesan",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Mains",
    rating: 4.7,
    tags: ["Vegetarian", "Italian", "Creamy"]
  },
  // Desserts
  {
    id: 8,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Desserts",
    rating: 4.8,
    tags: ["Sweet", "Italian", "Coffee"]
  },
  {
    id: 9,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Desserts",
    rating: 4.9,
    tags: ["Sweet", "Chocolate", "Hot"]
  }
];

const categories = ["All", "Appetizers", "Mains", "Desserts"];
const dietaryOptions = ["All", "Vegetarian", "Vegan", "Gluten-Free"];
const sortOptions = ["Popular", "Price: Low to High", "Price: High to Low", "Rating"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDietary, setSelectedDietary] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Popular");

  const filteredItems = menuItems
    .filter(item => selectedCategory === "All" || item.category === selectedCategory)
    .filter(item => selectedDietary === "All" || item.tags.includes(selectedDietary))
    .sort((a, b) => {
      switch (selectedSort) {
        case "Price: Low to High":
          return a.price - b.price;
        case "Price: High to Low":
          return b.price - a.price;
        case "Rating":
          return b.rating - a.rating;
        default:
          return b.rating - a.rating;
      }
    });

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Our Menu</h1>
          
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {sortOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(dish => (
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