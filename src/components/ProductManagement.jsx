"use client";

import { useToggle } from "@/hooks/useToggle";
import { ChevronDown, Funnel, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useProducts } from "../context/products";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

export default function ProductManagement() {
  const { products, categories, counter, setCounter } = useProducts();
  const [isOpenModal, setIsOpenModal] = useToggle();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");

  const ProductsByCategory = products?.filter((product) => {
    if (selectedCategory === "all") {
      return product;
    }
    return product.category.some(
      (category) =>
        category.label.toLowerCase() === selectedCategory.toLowerCase()
    );
  });

  const producstBySearch = products?.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const productsToShow = search ? producstBySearch : ProductsByCategory;

  useEffect(() => {
    setCounter(productsToShow?.length);
    return () => {
      setCounter(products?.length);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsToShow]);

  return (
    <div className="grid gap-4 md:gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
            Gestión de Productos
          </h1>
          <p className="text-gray-600 text-sm">
            Administra el catálogo de productos de tu tienda
          </p>
        </div>

        <button
          onClick={setIsOpenModal}
          className="bg-gray-900 hover:bg-black transition-all duration-200 text-white text-xs md:text-base h-10 py-2 px-2 md:py-3 md:px-4 rounded-md flex items-center gap-2 cursor-pointer"
        >
          <Plus width={18} height={18} color="#fff" />
          Crear Producto
        </button>
      </div>

      <div className="grid gap-6 p-6 border border-gray-200 rounded-md">
        <div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
            Lista de Productos
          </h2>
          <p className="text-sm text-gray-600">
            {counter} producto(s) encontrado(s)
          </p>
        </div>

        <div className="grid sm:flex items-center gap-4">
          <label htmlFor="search" className="relative w-full">
            <Search
              width={16}
              height={16}
              className="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none"
            />
            <input
              type="text"
              name="search"
              placeholder="Buscar productos..."
              className="border border-gray-300 rounded-md p-2 w-full pl-10"
              onChange={handleSearchChange}
              value={search}
            />
          </label>

          <label htmlFor="category" className="relative w-full sm:w-80">
            <Funnel
              width={16}
              height={16}
              className="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none"
            />

            <ChevronDown
              width={16}
              height={16}
              className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none"
            />
            <select
              className="w-full h-full p-2 pl-10 border border-gray-300 rounded-md cursor-pointer appearance-none capitalize"
              name="category"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="all">Todas las categorías</option>
              {categories.map(({ label }) => (
                <option key={label} value={label} className="capitalize">
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <ProductTable products={productsToShow} />

        <Modal isOpen={isOpenModal} className="grid gap-4 p-6 md:max-w-[600px]">
          <ModalHeader
            title="Crear Nuevo Producto"
            description="Completa la información del nuevo producto"
            className="p-0!"
            onClose={setIsOpenModal}
          />

          <ProductForm setIsOpen={setIsOpenModal} categories={categories} />
        </Modal>
      </div>
    </div>
  );
}
