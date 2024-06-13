import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types';

const ProductContext = createContext<Product[]>([]);

export const useProducts = () => useContext(ProductContext);

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>([
    { id: 1, name: 'Book A', price: 10 },
    { id: 2, name: 'Book B', price: 15 },
    { id: 3, name: 'Book C', price: 20 },
  ]);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
