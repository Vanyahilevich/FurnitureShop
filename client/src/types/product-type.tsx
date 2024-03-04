export type ProductsResponse = {
  foundProduct: number;
  maxPrice: number;
  products: ProductType[];
  totalPages: number;
};
export type ProductType = {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  quantity: number;
  image: string;
  category: string;
  material: string;
  rating: number;
};

export type DeliveryProductType = ProductType & { creationDate: number };
