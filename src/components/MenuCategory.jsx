"use client";

import { useProducts } from "@/context/products";
import Image from "next/image";
import MenuCategoryItem from "./MenuCategoryItem";

export default function MenuCategory({ clicked, onClose }) {
  const { activeCategories } = useProducts();

  return (
    <nav
      className={`${
        clicked ? "block" : "hidden"
      } fixed bg-primary p-5 h-[calc(100vh-69px)] md:h-[calc(100vh-69px-40px)] overflow-y-scroll scrollbar-thin scrollbar-thumb-accent left-0 top-0 right-0 mt-[69px] md:mt-0 md:sticky md:w-auto md:block md:top-[109px] z-30`}
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
          {activeCategories?.map(({ label, slug }) => {
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
          {catalogsHerracol
            .filter((c) => !c.disabled)
            .map((item) => {
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
    route: `https://vidres.ec/files/herracol-catalogo-2022.pdf`,
    target: "_blank",
  },
];

const catalogsBosco = [
  {
    id: "bosco-001",
    category: "Cadenas Motosierra",
    route: `https://vidres.ec/files/bosco-cadenas.pdf`,
    target: "_blank",
  },
];

const catalogsAgrimix = [
  {
    id: "agrimix-001",
    category: "Agrimix",
    route: `https://vidres.ec/files/agrimix.pdf`,
    target: "_blank",
  },
  {
    id: "agrimix-002",
    category: "Productos 1",
    route: `https://vidres.ec/files/agrimix-productos-1.pdf`,
    target: "_blank",
  },
  {
    id: "agrimix-003",
    category: "Productos 2",
    route: `https://vidres.ec/files/agrimix-productos-2.pdf`,
    target: "_blank",
  },
  {
    id: "agrimix-004",
    category: "Cosechadora De Caña",
    route: `https://vidres.ec/files/agrimix-cosechadora.pdf`,
    target: "_blank",
  },
  {
    id: "agrimix-005",
    category: "Componentes",
    route: `https://vidres.ec/files/agrimix-componentes.pdf`,
    target: "_blank",
  },
];
