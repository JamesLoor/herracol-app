"use client";

import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export function ProductsProvider({ children, initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [counter, setCounter] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        counter,
        setCounter,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
