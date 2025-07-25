"use client";

import { productService } from "@/sevices/product";
import { Alert } from "@heroui/react";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export function ProductsProvider({ children, initialProducts }) {
  const [products, setProducts] = useState(initialProducts || []);
  const [counter, setCounter] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [alert, setAlert] = useState({
    message: "",
    type: "",
    isVisible: false,
  });

  useEffect(() => {
    if (!initialProducts) {
      loadProducts();
    }
  }, []);

  useEffect(() => {
    const categories = products?.map((product) => product.category).flat();
    const set = new Set(categories.map(JSON.stringify));
    const categoriesWithoutDuplicates = Array.from(set).map(JSON.parse);
    setCategories(categoriesWithoutDuplicates);
  }, [products]);

  const showAlert = (message, type) => {
    setAlert({ message, type, isVisible: true });
    setTimeout(() => {
      setAlert({ message: "", type: "", isVisible: false });
    }, 3000);
  };

  const hideAlert = () => {
    setAlert({ message: "", type: "", isVisible: false });
  };

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

  const createProduct = async (productData) => {
    setIsLoading(true);
    try {
      const imageUrl = await productService.uploadImage(productData.image);
      const newCategories = productData.category.map((cat) => {
        return cat.toLowerCase().replaceAll(" ", "-");
      });

      const product = {
        ...productData,
        category: newCategories,
        image: imageUrl,
      };

      await productService.createProduct(product);
      showAlert("Producto creado correctamente", "success");
      await loadProducts();
    } catch (error) {
      setError("Error al crear el producto");
      showAlert("Error al crear el producto", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (productData, productId) => {
    setIsLoading(true);
    try {
      const newCategories = productData.category.map((cat) => {
        return cat.toLowerCase().replaceAll(" ", "-");
      });

      if (productData.image instanceof File) {
        const imageUrl = await productService.uploadImage(productData.image);
        productData.image = imageUrl;
      }

      const product = {
        ...productData,
        category: newCategories,
      };

      await productService.updateProduct(product, productId);
      showAlert("Producto actualizado correctamente", "success");
      await loadProducts();
    } catch (error) {
      setError("Error al actualizar el producto");
      showAlert("Error al actualizar el producto", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (productId) => {
    setIsLoading(true);
    try {
      await productService.deleteProduct(productId);
      showAlert("Producto eliminado correctamente", "success");
      await loadProducts();
    } catch (error) {
      setError("Error al eliminar el producto");
      showAlert("Error al eliminar el producto", "error");
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
      <Alert
        className="fixed top-2 right-2 sm:top-5 sm:right-5 w-[80dvw] sm:w-auto z-50"
        color={alert.type}
        description={alert.message}
        isVisible={alert.isVisible}
        variant="faded"
        onClose={() => hideAlert()}
      />
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
