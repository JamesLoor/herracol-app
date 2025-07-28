"use client";

import { productService } from "@/services/product.service";
import { Alert } from "@heroui/react";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export function ProductsProvider({ children, initialProducts }) {
  const [products, setProducts] = useState(initialProducts || []);
  const [counter, setCounter] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);
  const [alert, setAlert] = useState({
    message: "",
    type: "",
    isVisible: false,
  });

  const getCategoriesWithoutDuplicates = (products) => {
    const categories = products?.map((product) => product.category).flat();
    const set = new Set(categories.map(JSON.stringify));
    const categoriesWithoutDuplicates = Array.from(set).map(JSON.parse);
    return categoriesWithoutDuplicates;
  };

  useEffect(() => {
    if (!initialProducts) {
      loadProducts();
    }
  }, []);

  useEffect(() => {
    const productsActive = products?.filter((product) => product.isActive);
    const categories = getCategoriesWithoutDuplicates(productsActive);
    setActiveCategories(categories);
  }, [products]);

  useEffect(() => {
    const categories = getCategoriesWithoutDuplicates(products);
    setCategories(categories);
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
      console.error(error);
      showAlert("Error al cargar los productos", "error");
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
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await productService.createProduct(product);
      showAlert("Producto creado correctamente", "success");
      await loadProducts();
    } catch (error) {
      console.error(error);
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

      const { id, ...productWithoutId } = productData;
      const product = {
        ...productWithoutId,
        category: newCategories,
        updatedAt: new Date().toISOString(),
      };

      await productService.updateProduct(product, productId);
      showAlert("Producto actualizado correctamente", "success");
      await loadProducts();
    } catch (error) {
      console.error(error);
      showAlert("Error al actualizar el producto", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (product) => {
    setIsLoading(true);
    try {
      const newCategories = product.category.map((cat) => {
        return cat.toLowerCase().replaceAll(" ", "-");
      });

      const { id, ...productWithoutId } = product;
      const updatedProduct = {
        ...productWithoutId,
        category: newCategories,
        isDeleted: true,
        updatedAt: new Date().toISOString(),
      };
      await productService.updateProduct(updatedProduct, product.id);
      showAlert("Producto eliminado correctamente", "success");
      await loadProducts();
    } catch (error) {
      console.error(error);
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
        createProduct,
        loadProducts,
        categories,
        activeCategories,
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
