"use client";

import MenuCategory from "@/components/MenuCategory";
import { useToggle } from "@/hooks/useToggle";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { ProductsContext } from "@/context/products";
import Search from "@/components/Search";

export default function ProductsLayout({ children }) {
  const { clicked, handleClicked } = useToggle();
  const { products, setProducts, counter, setCounter } =
    useContext(ProductsContext);

  useEffect(() => {
    if (products.length === 0) {
      fetch(
        "https://herracol-api-8820d-default-rtdb.firebaseio.com/products.json"
      )
        .then((response) => response.json())
        .then((productsList) => {
          const categoriesToDelete = ["brocas", "martillos", "TEKBOND"];
          const newProductsList = productsList?.map((product) => {
            const categories = product.category.filter(
              (category) => !categoriesToDelete.includes(category)
            );
            const newCategories = categories.map((category) => {
              return {
                label: category.toLowerCase().replaceAll("-", " "),
                slug: category.toLowerCase(),
              };
            });

            return {
              ...product,
              category: newCategories,
            };
          });
          setProducts(newProductsList);
          setCounter(newProductsList?.length);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="px-[4%] py-10 grid gap-3">
      <div className="grid gap-6 md:grid-cols-productsCategory">
        <MenuCategory
          clicked={clicked}
          onClose={handleClicked}
          categories={[]}
        />
        <div className="grid gap-5 auto-rows-max">
          <div className="grid grid-cols-productsFilters md:grid-cols-productsFiltersMd grid-rows-[max-content] gap-4 items-center">
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
          {children}
        </div>
      </div>
    </section>
  );
}
