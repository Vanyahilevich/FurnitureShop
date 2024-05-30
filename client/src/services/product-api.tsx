import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { serverRoutes } from "src/routes";
import { ProductType, ProductsResponse } from "src/types/product-type";
import pDebounce from "p-debounce";

const fetchData = async (queryString: string) => {
  try {
    const response = await axios.get(serverRoutes.products + queryString);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
const debouncedFetchData = pDebounce(fetchData, 500);

export const useGetAllProducts = (queryString: string) => {
  const query = useQuery({
    queryKey: ["products", queryString],
    queryFn: async (): Promise<ProductsResponse> => {
      return await debouncedFetchData(queryString);
    },
    placeholderData: keepPreviousData,
  });

  return query;
};
export const useGetProductById = (id?: string) => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["product", id],
    queryFn: async (): Promise<ProductType> => {
      const response = await axios.get(`${serverRoutes.product}${id}`);
      return response.data;
    },
    placeholderData: keepPreviousData,
    initialData: () => {
      // const products = queryClient.getQueryData(["products"]);
      const products = queryClient.getQueryState(["products"]);

      console.log(products);
      return products?.find((product) => product.id === id);
    },
  });
  return query;
};
export const useGetSimilarProductsById = (id?: string) => {
  const query = useQuery({
    queryKey: ["similar-products", id],
    queryFn: async (): Promise<ProductType> => {
      const response = await axios.get(`${serverRoutes.similarProducts}${id}`);
      return response.data;
    },
    placeholderData: keepPreviousData,
  });
  return query;
};
