import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import DishCard from '../components/DishCard';
import { Dish } from '../types';

const allDishes: Dish[] = [
  {
    id: 10,
    name: "Spicy Ramen Bowl",
    description: "Rich pork broth with fresh noodles, chashu, and seasonal vegetables",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Mains",
    rating: 4.8,
    tags: ["Spicy", "Japanese", "Noodles"]
  },
  {
    id: 11,
    name: "Quinoa Power Bowl",
    description: "Nutrient-rich quinoa with roasted vegetables and tahini dressing",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Mains",
    rating: 4.6,
    tags: ["Vegan", "Healthy", "Bowl"]
  },
  {
    id: 12,
    name: "Mango Sticky Rice",
    description: "Sweet coconut sticky rice with fresh mango",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Desserts",
    rating: 4.7,
    tags: ["Sweet", "Thai", "Fruit"]
  }
];

interface Preference {
  id: string;
  label: string;
  options: string[];
}

const preferences: Preference[] = [
  {
    id: "taste",
    label: "Taste Preferences",
    options: ["Spicy", "Sweet", "Savory", "Sour", "Bitter"]
  },
  {
    id: "dietary",
    label: "Dietary Restrictions",
    options: ["None", "Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"]
  },
  {
    id: "cuisine",
    label: "Cuisine Type",
    options: ["Any", "Italian", "Japanese", "Thai", "Mexican", "Indian"]
  },
  {
    id: "meal",
    label: "Meal Type",
    options: ["Any", "Light", "Hearty", "Healthy", "Comfort Food"]
  }
];

export default function Recommendations() {
  const [selectedPreferences, setSelectedPreferences] = useState<Record<string, string[]>>({
    taste: [],
    dietary: [],
    cuisine: [],
    meal: []
  });
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handlePreferenceChange = (prefId: string, option: string) => {
    setSelectedPreferences(prev => ({
      ...prev,
      [prefId]: prev[prefId].includes(option)
        ? prev[prefId].filter(item => item !== option)
        : [...prev[prefId], option]
    }));
  };

  const getRecommendations = () => {
    setShowRecommendations(true);
    // In a real app, this would make an API call to get AI recommendations
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Get Personalized Recommendations
          </h1>
          <p className="text-gray-600 mb-8">
            Tell us your preferences and our AI will suggest dishes tailored just for you.
          </p>

          <div className="space-y-8">
            {preferences.map(pref => (
              <div key={pref.id}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{pref.label}</h3>
                <div className="flex flex-wrap gap-3">
                  {pref.options.map(option => (
                    <button
                      key={option}
                      onClick={() => handlePreferenceChange(pref.id, option)}
                      className={`px-4 py-2 rounded-full border transition-colors ${
                        selectedPreferences[pref.id].includes(option)
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={getRecommendations}
            className="mt-8 flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get Recommendations
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {showRecommendations && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recommended for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allDishes.map(dish => (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  onAddToCart={(dish) => console.log('Added to cart:', dish)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}