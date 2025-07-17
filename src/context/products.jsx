"use client";

import { productService } from "@/sevices/product";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export function ProductsProvider({ children, initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [counter, setCounter] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categories = products?.map((product) => product.category).flat();
    const set = new Set(categories.map(JSON.stringify));
    const categoriesWithoutDuplicates = Array.from(set).map(JSON.parse);
    setCategories(categoriesWithoutDuplicates);
  }, [products]);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const products = await productService.getProducts();
      const newProducts = products.map((product) => {
        const newCategory = product.category.map((cat) => {
          return {
            label: cat.toLowerCase().replaceAll("-", " "),
            slug: cat.toLowerCase(),
          };
        });

        return {
          ...product,
          category: newCategory,
        };
      });
      setProducts(newProducts);
    } catch (error) {
      setError("Error al cargar los productos");
    } finally {
      setIsLoading(false);
    }
  };

  const createProduct = async (formData, categories) => {
    setIsLoading(true);
    try {
      const data = Object.fromEntries(formData);
      const imageUrl = await productService.uploadImage(data.image);
      const newCategories = categories.map((cat) => {
        return cat.toLowerCase().replaceAll(" ", "-");
      });

      const product = {
        ...data,
        category: newCategories,
        image: imageUrl,
      };

      await productService.createProduct(product);
      await loadProducts();
    } catch (error) {
      setError("Error al crear el producto");
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (formData, categories, productId) => {
    setIsLoading(true);
    try {
      const newCategories = categories.map((cat) => {
        return cat.toLowerCase().replaceAll(" ", "-");
      });

      if (formData.image instanceof File) {
        const imageUrl = await productService.uploadImage(formData.image);
        formData.image = imageUrl;
      }

      const product = {
        ...formData,
        category: newCategories,
      };

      await productService.updateProduct(product, productId);
      await loadProducts();
    } catch (error) {
      setError("Error al actualizar el producto");
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (productId) => {
    setIsLoading(true);
    try {
      await productService.deleteProduct(productId);
      await loadProducts();
    } catch (error) {
      setError("Error al eliminar el producto");
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        counter,
        setCounter,
        searchValue,
        setSearchValue,
        isLoading,
        error,
        createProduct,
        loadProducts,
        categories,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
