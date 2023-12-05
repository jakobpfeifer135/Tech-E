import React, { useState } from 'react';
import PaymentForm from '../components/PaymentForm'; // Adjust the path accordingly

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleCheckout = () => {
    // You can add any logic you need before showing the PaymentForm
    setShowPaymentForm(true);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((product, index) => (
            <div key={index} className="bg-gray-100 border-[--Gold] border-4 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-black">{product.name}</h3>
              <p className="text-black">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                    disabled={product.quantity === 1}
                    className="bg-indigo-600 text-white py-1 px-2 rounded-md mr-2"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">{product.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                    className="bg-indigo-600 text-white py-1 px-2 rounded-md ml-2"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          {cartItems.length === 0 && (
            <p className="text-xl text-gray-800">Your Shopping Cart is Empty</p>
          )}
        </div>

        {/* Add a "Checkout" button that triggers the payment modal */}
        {!showPaymentForm && cartItems.length > 0 && (
          <button
            onClick={handleCheckout}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md mt-4"
          >
            Checkout!
          </button>
        )}

        {/* Include the PaymentForm component conditionally */}
        {showPaymentForm && <PaymentForm />}
      </div>
    </div>
  );
};

export default Checkout;