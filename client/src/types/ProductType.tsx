export type ProductsResponse = {
  foundProduct: number;
  maxPrice: number;
  products: ProductType[];
  page: number;
};
export type ProductType = {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  quantiny: number;
  image: string;
  category: string;
  material: string;
  rating: number;
};
