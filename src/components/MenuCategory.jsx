"use client";

import { ProductsContext } from "@/context/products";
import Image from "next/image";
import { useContext } from "react";
import MenuCategoryItem from "./MenuCategoryItem";

export default function MenuCategory({ clicked, onClose }) {
  const { products } = useContext(ProductsContext);

  const categories = products?.map((product) => product.category).flat();
  const set = new Set(categories.map(JSON.stringify));
  const categoriesWithoutDuplicates = Array.from(set).map(JSON.parse);

  return (
    <nav
      className={`${
        clicked ? "block" : "hidden"
      } fixed bg-primary p-5 h-[calc(100vh-69px)] md:h-[calc(100vh-69px-40px)] overflow-y-scroll scrollbar-thin scrollbar-thumb-accent left-0 top-0 right-0 mt-[69px] md:mt-0 md:sticky md:w-auto md:block md:top-[109px] z-50`}
    >
      <button onClick={onClose} className="absolute top-3 right-4 md:hidden">
        <Image
          src="/icons/close.svg"
          width={35}
          height={35}
          alt="Menu list icon"
        />
      </button>
      <div className="grid gap-4">
        <h3 className="text-2xl font-bold text-white">Categorias</h3>
        <ul className="grid gap-2">
          <li>
            <MenuCategoryItem
              route="/productos"
              category="All"
              onClose={onClose}
            />
          </li>
          {categoriesWithoutDuplicates?.map(({ label, slug }) => {
            return (
              <li key={slug}>
                <MenuCategoryItem
                  route={`/productos/${slug}`}
                  category={label}
                  onClose={onClose}
                />
              </li>
            );
          })}
        </ul>

        <h4 className="text-white font-semibold mt-5">Catálogo Herracol</h4>
        <ul className="grid gap-2">
          {catalogsHerracol.map((item) => {
            return (
              <li key={item.id} className="grid gap-2">
                <MenuCategoryItem {...item} onClose={onClose} />
              </li>
            );
          })}
        </ul>

        <h4 className="text-white font-semibold mt-5">Catálogo Bosco</h4>
        <ul className="grid gap-2">
          {catalogsBosco.map((item) => {
            return (
              <li key={item.id} className="grid gap-2">
                <MenuCategoryItem {...item} onClose={onClose} />
              </li>
            );
          })}
        </ul>

        <h4 className="text-white font-semibold mt-5">
          Presentaciones Agrimix
        </h4>
        <ul className="grid gap-2">
          {catalogsAgrimix.map((item) => {
            return (
              <li key={item.id} className="grid gap-2">
                <MenuCategoryItem {...item} onClose={onClose} />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

const catalogsHerracol = [
  {
    id: "herracol-001",
    category: "PDF",
    route:
      "https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FHerracol%2FCatalogoHerracol2022.pdf?alt=media",
    target: "_blank",
  },
  {
    id: "herracol-002",
    category: "FLIP (Libro)",
    route: "https://online.fliphtml5.com/mfsdq/qmxs",
    target: "_blank",
  },
];

const catalogsBosco = [
  {
    id: "bosco-001",
    category: "Cadenas Motosierra",
    route:
      "https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FBosco%2FCadenasBosco.pdf?alt=media",
    target: "_blank",
  },
];

const catalogsAgrimix = [
  {
    id: "agrimix-001",
    category: "Agrimix",
    route:
      "https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FAgrimix%2FAgrimix%20Presentacion%20Espanol.pdf?alt=media",
    target: "_blank",
  },
  {
    id: "agrimix-002",
    category: "Productos 1",
    route:
      "https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FAgrimix%2FPresentacion%20Agrimix.pdf?alt=media",
    target: "_blank",
  },
  {
    id: "agrimix-003",
    category: "Productos 2",
    route:
      "https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FAgrimix%2FAgrimix%20-%20Presentacion%20Cuchillas-Extractor%20etc.pdf?alt=media",
    target: "_blank",
  },
  {
    id: "agrimix-004",
    category: "Cosechadora De Caña",
    route:
      "https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FAgrimix%2FPresentaci%C3%B3n%20del%20Mando%20Final%20COMER%20-%20Cosechadora%20de%20Ca%C3%B1a.pdf?alt=media",
    target: "_blank",
  },
  {
    id: "agrimix-005",
    category: "Componentes",
    route:
      "https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FAgrimix%2FCapuchones-convertido.pdf?alt=media",
    target: "_blank",
  },
];
