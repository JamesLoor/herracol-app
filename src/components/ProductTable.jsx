"use client";

import { useProducts } from "@/context/products";
import { useToggle } from "@/hooks/useToggle";
import { Button } from "@heroui/react";
import { useState } from "react";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import ProductForm from "./ProductForm";
import ProductTableHeaderCell from "./ProductTableHeaderCell";
import ProductTableRow from "./ProductTableRow";

export default function ProductTable({ products }) {
  const [isOpenModal, setIsOpenModal] = useToggle();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useToggle();
  const [productToUpdate, setProductToUpdate] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);
  const { categories, deleteProduct } = useProducts();

  const handleToggledUpdateModal = (product) => {
    setIsOpenModal();
    setProductToUpdate(product);
  };

  const handleToggledDeleteModal = (product) => {
    setIsOpenDeleteModal();
    setProductToDelete(product);
  };

  const handleDeleteProduct = () => {
    deleteProduct(productToDelete);
    setIsOpenDeleteModal();
  };

  return (
    <>
      <div className="overflow-x-auto border border-gray-200 rounded-md">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr>
              {productTableLabels.map(({ key, name }, index, array) => (
                <ProductTableHeaderCell
                  key={key}
                  label={name}
                  isLast={index === array.length - 1}
                />
              ))}
            </tr>
          </thead>

          <tbody className="bg-white">
            {products?.map((product) => (
              <ProductTableRow
                key={product.id}
                product={product}
                onToggledUpdateModal={handleToggledUpdateModal}
                onToggledDeleteModal={handleToggledDeleteModal}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isOpenModal} className="grid gap-4 p-6 md:max-w-[600px]">
        <ModalHeader
          title="Editar Producto"
          description="Modifica la información del producto"
          className="p-0!"
          onClose={setIsOpenModal}
        />

        <ProductForm
          setIsOpen={setIsOpenModal}
          categories={categories}
          productToUpdate={productToUpdate}
        />
      </Modal>

      <Modal
        isOpen={isOpenDeleteModal}
        className="grid gap-4 p-6 md:max-w-[600px]"
      >
        <ModalHeader
          title="Eliminar Producto"
          onClose={setIsOpenDeleteModal}
          className="p-0!"
        />
        <div>
          <p className="text-md text-gray-500">
            {`Esta acción no se puede deshacer. Se eliminara el producto "${productToDelete?.name}"`}
          </p>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="bordered" radius="sm" onPress={setIsOpenDeleteModal}>
            Cancelar
          </Button>
          <Button
            variant="solid"
            radius="sm"
            color="danger"
            onPress={handleDeleteProduct}
          >
            Eliminar
          </Button>
        </div>
      </Modal>
    </>
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
    key: "status",
    name: "Estado",
  },
  {
    key: "actions",
    name: "Acciones",
  },
];
