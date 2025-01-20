import React from 'react';
import { Trash2, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Spicy Thai Basil Noodles",
    description: "Fresh rice noodles stir-fried with Thai basil, chili, and seasonal vegetables",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Mains",
    rating: 4.8,
    tags: ["Spicy", "Thai", "Noodles"],
    quantity: 2
  },
  {
    id: 2,
    name: "Mediterranean Bowl",
    description: "Fresh quinoa bowl with falafel, hummus, and grilled vegetables",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Mains",
    rating: 4.6,
    tags: ["Vegetarian", "Healthy", "Mediterranean"],
    quantity: 1
  }
];

export default function Cart() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 3.99;
  const total = subtotal + deliveryFee;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-md mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <button className="text-gray-400 hover:text-red-500">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-3">
                        <button className="p-1 rounded-full hover:bg-gray-100">
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <span className="font-semibold">{item.quantity}</span>
                        <button className="p-1 rounded-full hover:bg-gray-100">
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                      <span className="font-bold text-orange-500">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:w-96">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-semibold text-gray-800">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="mt-6 w-full flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Proceed to Checkout
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some delicious dishes to get started!</p>
            <Link
              to="/menu"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Browse Menu
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}