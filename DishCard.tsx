import React from 'react';
import { Star, Plus } from 'lucide-react';
import { Dish } from '../types';

interface DishCardProps {
  dish: Dish;
  onAddToCart: (dish: Dish) => void;
}

export default function DishCard({ dish, onAddToCart }: DishCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={dish.image} 
        alt={dish.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{dish.rating}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{dish.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-orange-500">${dish.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(dish)}
            className="flex items-center px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}