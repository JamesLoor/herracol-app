export type ProductResponse = Product & { id: string };

export type Product = {
  name: string;
  description: string;
  price: number;
  category: { label: string; slug: string }[];
  image: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};
