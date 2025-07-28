export type ProductResponse = Product & { id: string };

export type Product = {
  name: string;
  description: string;
  price: number;
  category: string[];
  image: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
