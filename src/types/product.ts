export type ProductResponse = Product & { id: string };

export type Product = {
  name: string;
  category: { label: string; slug: string }[];
  image: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  sku: string;
  infoSku: InfoSku[];
};

export type InfoSku = {
  sku: string;
  information: string;
};
