import React from 'react';
import ProductProvider from './contexts/ProductContext';
import CartProvider from './contexts/CartContext';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Book Store</h1>
          <ProductList />
          <CartSummary />
        </div>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
