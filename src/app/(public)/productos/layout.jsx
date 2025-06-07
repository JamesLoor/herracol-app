"use client";

import MenuCategory from "@/components/MenuCategory";
import Search from "@/components/Search";
import { ProductsContext } from "@/context/products";
import { useToggle } from "@/hooks/useToggle";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect } from "react";

export default function ProductsLayout({ children }) {
  const [clicked, handleClicked] = useToggle();
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
    <>
      <Head key="products">
        <title>Productos | Herracol S.A.</title>
        <meta
          name="description"
          content="Desde 2000, somos tu proveedor confiable en Ecuador para una amplia gama de herramientas, desde equipos para automóviles y agricultura, hasta productos de seguridad industrial y pintura. Ofrecemos también servicios de instalación de aluminio y vidrio con expertos calificados."
        />
        <meta property="og:title" content="Productos | Herracol S.A." />
        <meta
          property="og:description"
          content="Desde 2000, somos tu proveedor confiable en Ecuador para una amplia gama de herramientas, desde equipos para automóviles y agricultura, hasta productos de seguridad industrial y pintura. Ofrecemos también servicios de instalación de aluminio y vidrio con expertos calificados."
        />
        <meta property="og:url" content="https://herracol.net/productos" />
        <link rel="canonical" href="https://herracol.net/productos" />
      </Head>
      <section className="px-[4%] py-10 grid gap-3">
        <div className="grid gap-6 md:grid-cols-[var(--grid-products-category)]">
          <MenuCategory
            clicked={clicked}
            onClose={handleClicked}
            categories={[]}
          />
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
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
