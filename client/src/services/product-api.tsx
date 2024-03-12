import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { serverRoutes } from "src/routes";
import { ProductsResponse } from "src/types/product-type";
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
    queryFn: async ({ queryKey }): Promise<ProductsResponse> => {
      return await debouncedFetchData(queryString);
    },
    placeholderData: keepPreviousData,
  });

  return query;
};

// export const useGetAllProducts = (queryString: any) => {
//   return useQuery({
//     queryKey: ["products", queryString],
//     queryFn: async (): Promise<ProductsResponse> => {
//       try {
//         const response = await axios.get(serverRoutes.products + queryString);
//         return response.data;
//       } catch (error) {
//         throw error.response.data;
//       }
//     },
//   });
// };