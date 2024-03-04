import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { serverRoutes } from "src/routes";
import { ProductType } from "src/types/product-type";

export const useGetProductsFromBasket = () => {
  return useQuery({
    queryKey: ["basket"],
    queryFn: async (): Promise<ProductType[]> => {
      const response = await axios.get(serverRoutes.basket, {
        withCredentials: true,
      });
      return response.data;
    },
  });
};
export const useAddProductTobasket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket"],
    mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
      try {
        await axios.post(
          `${serverRoutes.basket}/${id}`,
          { quantity },
          {
            withCredentials: true,
          },
        );
      } catch (error) {
        throw error.response.data;
      }
    },
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};

export const useDeleteAllProductsFromBasket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket"],
    mutationFn: async () => {
      await axios.delete(serverRoutes.basket, { withCredentials: true });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};

export const usePurchaseProducts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket", "delivery"],
    mutationFn: async (products: ProductType[]) => {
      await axios.post(serverRoutes.purchase, products, {
        withCredentials: true,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
      queryClient.invalidateQueries({ queryKey: ["delivery"] });
    },
  });
};
