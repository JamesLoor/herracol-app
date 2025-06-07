"use client";

import { ProductsContext } from "@/context/products";
import Head from "next/head";
import { useContext, useEffect } from "react";

export default function ProductsLayout({ children }) {
  const { products, setProducts, setCounter } = useContext(ProductsContext);

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
      <section className="px-[4%] py-10 grid gap-3">{children}</section>
    </>
  );
}
