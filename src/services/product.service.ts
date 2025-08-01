import { Product, ProductResponse } from "@/types/product";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_FIREBASE_REALTIME_DATABASE_API;

const getProducts = async (): Promise<ProductResponse[]> => {
  const response = await axios.get<{
    [key: string]: Product;
  }>(`${url}/products.json`);

  const products = Object.entries(response.data || {})
    ?.map(([key, product]) => {
      return {
        ...product,
        id: key,
      };
    })
    .toSorted((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .filter((p) => !p.isDeleted);

  return products;
};

const createProduct = async (product: Product): Promise<void> => {
  await axios.post(`${url}/products.json`, product);
};

const uploadImage = async (image: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", image);

  const response = await axios.post("/api/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.url;
};

const updateProduct = async (
  id: string,
  product: Partial<Product>
): Promise<void> => {
  await axios.patch(`${url}/products/${id}.json`, product);
};

const deleteProduct = async (id: string): Promise<void> => {
  await axios.delete(`${url}/products/${id}.json`);
};

export const productService = {
  createProduct,
  uploadImage,
  getProducts,
  updateProduct,
  deleteProduct,
};
