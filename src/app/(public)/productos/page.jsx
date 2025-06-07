"use client";

import Product from "@/components/Product";
import { ProductsContext } from "@/context/products";
import { useContext, useEffect } from "react";

export default function Products() {
  const { products, setCounter, searchValue } = useContext(ProductsContext);

  const filteredBySearch = products?.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const productsToShow = searchValue ? filteredBySearch : products;

  useEffect(() => {
    setCounter(productsToShow?.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsToShow]);

  if (products?.length === 0) {
    return <div className="w-full grid place-items-center">Cargando...</div>;
  }

  if (products.length > 0 && filteredBySearch.length === 0) {
    return <p className="text-center">El producto que busca no se encuentra</p>;
  }

  return (
    <ul className="grid grid-cols-[var(--grid-products)] gap-6">
      {productsToShow?.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </ul>
  );
}
