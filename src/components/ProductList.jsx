"use client";

import MenuCategory from "@/components/MenuCategory";
import Product from "@/components/Product";
import Search from "@/components/Search";
import { useProducts } from "@/context/products";
import { useToggle } from "@/hooks/useToggle";
import { Spinner } from "@heroui/react";
import Image from "next/image";
import { useEffect } from "react";

export default function ProductList({ category }) {
  const [clicked, handleClicked] = useToggle();
  const { products, counter, setCounter, searchValue } = useProducts();

  const filteredProductsByStatus = products?.filter(
    (product) => product.isActive
  );

  const filteredProductsByCategory = category
    ? filteredProductsByStatus?.filter((product) =>
        product.category.some(
          (cat) => cat.slug.toLowerCase() === category.toLowerCase()
        )
      )
    : filteredProductsByStatus;

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

  return (
    <div className="grid gap-6 md:grid-cols-[var(--grid-products-category)]">
      <MenuCategory clicked={clicked} onClose={handleClicked} />

      <div className="grid gap-5 auto-rows-max">
        <div className="grid grid-cols-[var(--grid-products-filters)] md:grid-cols-[var(--grid-products-filters-md)] grid-rows-[max-content] gap-4 items-center">
          <button onClick={handleClicked} className="md:hidden">
            <Image
              src="/icons/menu-category.svg"
              width={25}
              height={25}
              alt="Menu category icon"
            />
          </button>
          <span className="flex gap-1">
            <span className="hidden md:block">Mostrando</span>
            <span>
              {counter} de {products?.length}
            </span>
            <span className="hidden md:block">productos</span>
          </span>
          <Search />
        </div>

        {products?.length === 0 && (
          <div className="w-full grid place-items-center">
            <Spinner color="primary" />
          </div>
        )}

        {products.length > 0 && filteredBySearch.length === 0 && (
          <p className="text-center">El producto que busca no se encuentra</p>
        )}

        <ul className="grid gap-6 grid-cols-[var(--grid-products)]">
          {productsToShow?.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </ul>
      </div>
    </div>
  );
}
