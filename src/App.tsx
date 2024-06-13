import React from 'react';
import ProductProvider from './contexts/ProductContext';
import CartProvider from './contexts/CartContext';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">Book Store</h1>
          </header>
          <main className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <section className="lg:col-span-3">
              <ProductList />
            </section>
            <aside className="lg:col-span-1">
              <CartSummary />
            </aside>
          </main>
        </div>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
