import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartSummary: React.FC = () => {
  const { cart, getTotalPrice } = useCart();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-3">
              <span className="text-lg">{item.name} (x{item.quantity})</span>
              <span className="text-lg">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4 text-xl font-bold">
            <span>Total Price:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
