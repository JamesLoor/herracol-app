/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useProducts } from "@/context/products";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { Check, Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ProductForm({
  setIsOpen,
  categories,
  productToUpdate,
}) {
  const [newCategory, setNewCategory] = useState("");
  const [categoriesMerged, setCategoriesMerged] = useState(
    categories?.map(({ label }) => label)
  );
  const [isCreatingNewCategory, setIsCreatingNewCategory] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [inputError, setInputError] = useState("");
  const [formUpdateData, setFormUpdateData] = useState({
    name: "",
    brand: "",
    code: "",
    image: "",
    sku: "",
    information: "",
  });
  const inputRef = useRef(null);
  const { isLoading, createProduct, error, updateProduct } = useProducts();

  const productToUpdateCategories = productToUpdate?.category.map(
    ({ label }) => label
  );

  useEffect(() => {
    setCategoriesMerged(categories?.map(({ label }) => label));
    if (productToUpdate) {
      setSelectedCategories(new Set([...productToUpdateCategories]));
      setFormUpdateData({
        name: productToUpdate.name || "",
        brand: productToUpdate.brand || "",
        code: productToUpdate.code || "",
        image: productToUpdate.image || "",
        sku: productToUpdate.sku || "",
        information: productToUpdate.information || "",
      });
    }
  }, [categories, productToUpdate]);

  useEffect(() => {
    if (isCreatingNewCategory && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCreatingNewCategory]);

  const handleAddCategory = () => {
    const trimmedCategory = newCategory.trim();

    if (!trimmedCategory) {
      setInputError("Ingresa una categoría válida");
      return;
    }

    if (validateCategory(trimmedCategory)) {
      return;
    }

    addCategoryToState(trimmedCategory);
    resetCategories();
  };

  const validateCategory = (trimmedCategory) => {
    const categoryExists = categoriesMerged.some(
      (cat) => cat.toLowerCase() === trimmedCategory.toLowerCase()
    );

    if (categoryExists) {
      setInputError("Esta categoría ya existe");
      return true;
    }

    return false;
  };

  const addCategoryToState = (category) => {
    setCategoriesMerged((prev) => [...prev, category]);
    setSelectedCategories((prev) => [...prev, category]);
  };

  const resetCategories = () => {
    setNewCategory("");
    setInputError("");
    setIsCreatingNewCategory(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormUpdateData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormUpdateData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newCategories = Array.from(selectedCategories);

    try {
      if (productToUpdate) {
        await updateProduct(formUpdateData, newCategories, productToUpdate.id);
      } else {
        await createProduct(formData, newCategories);
      }

      e.target.reset();
      setIsCreatingNewCategory(false);
      setIsOpen(false);
    } catch (err) {
      console.error(err, error);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <Input
          name="name"
          label="Nombre"
          variant="bordered"
          radius="sm"
          value={formUpdateData.name || ""}
          onChange={handleInputChange}
          isRequired
        />
        <Input
          name="brand"
          label="Marca"
          variant="bordered"
          radius="sm"
          value={formUpdateData.brand || ""}
          onChange={handleInputChange}
          isRequired
        />
      </div>

      <Input
        name="code"
        label="Código"
        variant="bordered"
        radius="sm"
        value={formUpdateData.code || ""}
        isRequired
        onChange={handleInputChange}
      />

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Select
            className="flex-1 min-w-[200px]"
            label="Categorías"
            selectionMode="multiple"
            variant="bordered"
            radius="sm"
            classNames={{
              value: "capitalize",
            }}
            selectedKeys={selectedCategories}
            onSelectionChange={setSelectedCategories}
            isRequired
          >
            {categoriesMerged?.map((category) => (
              <SelectItem
                key={category}
                value={category}
                className="capitalize"
              >
                {category}
              </SelectItem>
            ))}
          </Select>

          <div className="flex items-center gap-2">
            {!isCreatingNewCategory ? (
              <Button
                variant="solid"
                radius="sm"
                startContent={<Plus size={16} />}
                onPress={() => {
                  setIsCreatingNewCategory(true);
                  setInputError("");
                }}
                className="h-[56px] bg-gray-900 text-white"
              >
                Agregar categoría
              </Button>
            ) : (
              <div className="grid gap-1">
                <div className="flex items-center gap-2 animate-appearance-in">
                  <Input
                    ref={inputRef}
                    radius="sm"
                    value={newCategory}
                    onChange={(e) => {
                      setNewCategory(e.target.value);
                      setInputError("");
                    }}
                    label="Nueva categoría"
                    onKeyDown={(e) => e.key === "Enter" && handleAddCategory()}
                    isInvalid={inputError !== ""}
                    errorMessage={inputError}
                  />
                  <Button
                    isIconOnly
                    variant="shadow"
                    onPress={handleAddCategory}
                    isDisabled={!newCategory}
                    className="bg-gray-900 hover:bg-black text-white"
                  >
                    <Check size={16} />
                  </Button>
                  <Button
                    isIconOnly
                    variant="flat"
                    className="bg-gray-900 hover:bg-black text-white"
                    onPress={() => {
                      setIsCreatingNewCategory(false);
                      setNewCategory("");
                      setInputError("");
                    }}
                  >
                    <X size={16} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        <label className="font-semibold">Imagen del Producto</label>
        <Input
          name="image"
          type="file"
          variant="bordered"
          radius="sm"
          accept="image/png, image/jpeg, image/jpg"
          size="lg"
          classNames={{
            input: "file:mr-3",
          }}
          isRequired={!productToUpdate}
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
      </div>

      <div className="grid gap-2">
        <label className="font-semibold">Información Adicional</label>
        <div className="flex gap-3">
          <Input
            name="sku"
            label="SKU"
            variant="bordered"
            radius="sm"
            value={formUpdateData.sku || ""}
            onChange={handleInputChange}
          />
          <Input
            name="information"
            label="Información"
            variant="bordered"
            radius="sm"
            value={formUpdateData.information || ""}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <Button variant="bordered" radius="sm" onPress={setIsOpen}>
          Cancelar
        </Button>
        <Button
          type="submit"
          variant="solid"
          radius="sm"
          className="bg-gray-900 text-white"
          isLoading={isLoading}
        >
          {productToUpdate ? "Actualizar" : "Crear"}
        </Button>
      </div>
    </form>
  );
}
