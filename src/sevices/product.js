import axios from "axios";

const url = process.env.NEXT_PUBLIC_FIREBASE_REALTIME_DATABASE_API;

const getProducts = async () => {
  const response = await axios.get(`${url}/products.json`);

  const products = Object.entries(response.data).map(([key, product]) => {
    return {
      id: key,
      ...product,
    };
  });

  return products;
};

const createProduct = async (product) => {
  const response = await axios.post(`${url}/products.json`, product);
  return response.data;
};

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);

  const response = await axios.post("/api/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.url;
};

const updateProduct = async (product, id) => {
  const response = await axios.patch(`${url}/products/${id}.json`, product);
  return response.data;
};

export const productService = {
  createProduct,
  uploadImage,
  getProducts,
  updateProduct,
};
