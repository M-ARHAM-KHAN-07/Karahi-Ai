import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Menu className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">TasteAI</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/menu" className="text-gray-600 hover:text-orange-500">Menu</Link>
            <Link to="/recommendations" className="text-gray-600 hover:text-orange-500">AI Recommendations</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-orange-500" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
            </Link>
            <Link to="/account">
              <User className="h-6 w-6 text-gray-600 hover:text-orange-500" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}