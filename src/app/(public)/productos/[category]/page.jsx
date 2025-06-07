"use client";

import Product from "@/components/Product";
import { use, useEffect } from "react";

export default function Page(props) {
  const params = use(props.params);
  const { category } = params;
  const { products, setCounter, searchValue } = useContext(ProductsContext);

  const filteredProductsByCategory = products?.filter((product) =>
    product.category.some((cat) => cat.slug === category)
  );

  const filteredBySearch = filteredProductsByCategory?.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const productsToShow = searchValue
    ? filteredBySearch
    : filteredProductsByCategory;

  useEffect(() => {
    setCounter(productsToShow?.length);
    return () => {
      setCounter(products?.length);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsToShow]);

  if (products?.length === 0) {
    return <div className="w-full grid place-items-center">Cargando..</div>;
  }

  if (products.length > 0 && filteredBySearch.length === 0) {
    return <p className="text-center">El producto que busca no se encuentra</p>;
  }

  return (
    <ul className="grid gap-6 grid-cols-[var(--grid-products)]">
      {productsToShow?.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </ul>
  );
}
