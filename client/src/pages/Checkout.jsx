// CartPage.js
import React from 'react';

const Checkout = () => {
  const cartItems = [
    { name: 'Product 1', description: 'Description of Product 1.' },
    { name: 'Product 2', description: 'Description of Product 2.' },
    { name: 'Product 3', description: 'Description of Product 3.' },
    // Add more products as needed
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((product, index) => (
            <div key={index} className="bg-gray-100 border-[#ecd398] border-4 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-black">{product.name}</h3>
              <p className="text-black">{product.description}</p>
            </div>
          ))}
          {cartItems.length === 0 && (
            <p className="text-xl text-gray-600">Your Shopping Cart is Empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;

