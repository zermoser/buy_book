import React from 'react';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';

const ProductList: React.FC = () => {
  const products = useProducts();
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
