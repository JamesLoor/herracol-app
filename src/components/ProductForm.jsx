/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useProducts } from "@/context/products";
import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Switch,
} from "@heroui/react";
import { Check, Plus, X } from "lucide-react";
import Image from "next/image";
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
  const [multipleCodes, setMultipleCodes] = useState(false);
  const [codeEntries, setCodeEntries] = useState([
    { sku: "", information: "" },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    image: "",
    sku: "",
    infoSku: [],
    isActive: false,
  });
  const inputRef = useRef(null);
  const { isLoading, createProduct, updateProduct } = useProducts();

  const productToUpdateCategories = productToUpdate?.category.map(
    ({ label }) => label
  );

  useEffect(() => {
    setCategoriesMerged(categories?.map(({ label }) => label));
    if (productToUpdate) {
      setSelectedCategories(new Set([...productToUpdateCategories]));

      if (productToUpdate.infoSku?.length > 0) {
        setMultipleCodes(true);
        setCodeEntries(
          productToUpdate.infoSku.map((item) => ({
            sku: item.sku || "",
            information: item.information || "",
          }))
        );
        setFormData({
          ...productToUpdate,
          sku: "",
        });
        return;
      }

      setMultipleCodes(false);
      setCodeEntries([{ sku: "", information: "" }]);
      setFormData({
        ...productToUpdate,
        infoSku: [],
      });
    }
  }, [categories, productToUpdate]);

  useEffect(() => {
    if (isCreatingNewCategory && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCreatingNewCategory]);

  const handleCodeChange = (index, field, value) => {
    const newEntries = [...codeEntries];
    newEntries[index][field] = value;
    setCodeEntries(newEntries);
  };

  const addCodeEntry = () => {
    setCodeEntries([...codeEntries, { sku: "", information: "" }]);
  };

  const removeCodeEntry = (index) => {
    if (codeEntries.length > 1) {
      const newEntries = codeEntries.filter((_, i) => i !== index);
      setCodeEntries(newEntries);
    }
  };

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCategories = Array.from(selectedCategories);

    let productData = {
      ...formData,
      isActive: formData.isActive,
      category: newCategories,
      sku: multipleCodes ? "" : formData.sku,
      infoSku: multipleCodes
        ? codeEntries.map((entry) => ({
            sku: entry.sku,
            information: entry.information,
          }))
        : [],
    };

    try {
      if (!productToUpdate) {
        await createProduct(productData);
        resetForm(e);
        return;
      }

      await updateProduct(productData, productToUpdate.id);
      setIsOpen();
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = (e) => {
    e.target.reset();
    setFormData({
      name: "",
      brand: "",
      image: "",
      sku: "",
      infoSku: [],
    });
    setCodeEntries([{ sku: "", information: "" }]);
    setSelectedCategories([]);
    setMultipleCodes(false);
    setIsCreatingNewCategory(false);
    setIsOpen();
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <Input
          name="name"
          label="Nombre"
          variant="bordered"
          radius="sm"
          value={formData.name || ""}
          onChange={handleInputChange}
          isRequired
        />
        <Input
          name="brand"
          label="Marca"
          variant="bordered"
          radius="sm"
          value={formData.brand || ""}
          onChange={handleInputChange}
          isRequired
        />
      </div>

      <div className="grid gap-2">
        <div className="flex items-center gap-3">
          <Checkbox
            radius="sm"
            color="white"
            isSelected={multipleCodes}
            onValueChange={(isChecked) => {
              setMultipleCodes(isChecked);
            }}
          />
          <span className="text-sm font-medium">
            ¿Contiene múltiples códigos?
          </span>
        </div>

        {!multipleCodes ? (
          <Input
            name="sku"
            label="sku"
            variant="bordered"
            radius="sm"
            value={formData.sku}
            onChange={handleInputChange}
            isRequired
            className="uppercase"
          />
        ) : (
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Códigos del Producto</h3>
              <Button
                variant="bordered"
                radius="sm"
                startContent={<Plus size={16} />}
                onPress={addCodeEntry}
              >
                Agregar código
              </Button>
            </div>

            {codeEntries.map((entry, index) => (
              <div key={index} className="">
                <div className="flex gap-3">
                  <Input
                    label={`sku ${index + 1}`}
                    variant="bordered"
                    radius="sm"
                    value={entry.sku}
                    onChange={(e) => {
                      handleCodeChange(index, "sku", e.target.value);
                    }}
                    className="uppercase"
                    isRequired={index >= 0}
                  />

                  <Input
                    label={`Información ${index + 1}`}
                    variant="bordered"
                    radius="sm"
                    value={entry.information}
                    onChange={(e) => {
                      handleCodeChange(index, "information", e.target.value);
                    }}
                    placeholder="Ej. color, tamaño, etc."
                    isRequired={index >= 0}
                  />
                  {index > 0 && (
                    <Button
                      isIconOnly
                      variant="light"
                      color="danger"
                      onPress={() => removeCodeEntry(index)}
                      className="h-[56px]"
                    >
                      <X size={16} />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Select
            className="flex-1"
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
            scrollShadowProps={{
              hideScrollBar: false,
            }}
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

      <div className="flex items-center justify-between shadow-xs border-medium border-default-200 px-2 py-3 rounded-sm">
        <div className="grid gap-1">
          <label className="text-sm font-semibold">Estado del Producto</label>
          {formData.isActive ? (
            <span className="text-xs text-gray-500">
              El producto estará visible y se mostrará en la página de productos
            </span>
          ) : (
            <span className="text-xs text-gray-500">
              El producto estará oculto y no se mostrará en la página de
              productos
            </span>
          )}
        </div>

        <Switch
          size="sm"
          color="success"
          isSelected={formData.isActive}
          onValueChange={(isChecked) => {
            setFormData((prev) => ({ ...prev, isActive: isChecked }));
          }}
        />
      </div>

      <div className="grid gap-2">
        <label className="font-semibold">Imagen del Producto</label>
        {formData.image && (
          <div className="w-full h-64 flex items-center justify-center">
            <Image
              src={
                formData?.image instanceof File
                  ? URL.createObjectURL(formData.image)
                  : formData.image
              }
              alt="Vista previa"
              width={700}
              height={700}
              className="rounded-lg w-full h-full object-contain"
            />
          </div>
        )}

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
