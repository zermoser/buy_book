import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartSummary: React.FC = () => {
  const { cart, getTotalPrice } = useCart();

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">Cart Summary</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mt-2">
          <span>{item.name} (x{item.quantity})</span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}
      <div className="flex justify-between mt-4 font-bold">
        <span>Total Price:</span>
        <span>${getTotalPrice()}</span>
      </div>
    </div>
  );
};

export default CartSummary;
