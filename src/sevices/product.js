import axios from "axios";

const url = process.env.NEXT_PUBLIC_FIREBASE_REALTIME_DATABASE_API;

export const getProducts = async () => {
  const response = await axios.get(`${url}/products.json`);

  const products = Object.entries(response.data).map(([key, product]) => {
    return {
      id: key,
      ...product,
    };
  });

  return products;
};
