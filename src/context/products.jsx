"use client";

import { createContext, useState } from "react";

export const ProductsContext = createContext();

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
