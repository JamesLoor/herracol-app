"use client";

import { ProductsContext } from "@/context/products";
import { useContext } from "react";
import ProductTableHeaderCell from "./ProductTableHeaderCell";
import ProductTableRow from "./ProductTableRow";

export default function ProductTable() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-md">
      <table className="w-full">
        <thead className="border-b border-gray-200">
          <tr>
            {productTableLabels.map(({ key, name }) => (
              <ProductTableHeaderCell key={key} label={name} />
            ))}
          </tr>
        </thead>

        <tbody className="bg-white">
          {products.map((product) => (
            <ProductTableRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const productTableLabels = [
  {
    key: "image",
    name: "Imagen",
  },
  {
    key: "name",
    name: "Nombre",
  },
  {
    key: "brand",
    name: "Marca",
  },
  {
    key: "categories",
    name: "Categorías",
  },
  {
    key: "code",
    name: "Código",
  },
  {
    key: "actions",
    name: "Acciones",
  },
];
