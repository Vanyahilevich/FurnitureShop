import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { serverRoutes } from "src/routes";
import { DeliveryProductType, ProductType } from "src/types/product-type";

export const useGetProductsFromDelivery = (userId?: string) => {
  return useQuery({
    queryKey: ["delivery"],
    queryFn: async (): Promise<DeliveryProductType[]> => {
      try {
        const response = await axios.get(serverRoutes.delivery, {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    },
    enabled: !!userId,
  });
};

export const useDeleteProductFromDelivery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delivery"],
    mutationFn: async ({
      id,
      creationDateMillis,
      quantity,
    }: {
      id: string;
      creationDateMillis: number;
      quantity: number;
    }) => {
      try {
        await axios.delete(
          `${serverRoutes.delivery}/${id}/${creationDateMillis}`,
          {
            withCredentials: true,
            data: { quantity },
          },
        );
      } catch (error) {
        throw error.response.data;
      }
    },
    onMutate: (variables) => {
      const prevBasketData = queryClient.getQueryData(["delivery"]);

      const { id, creationDateMillis } = variables;
      queryClient.setQueryData(["delivery"], (prevData) => {
        return prevData.filter(
          (product) =>
            product.id !== id ||
            product.creationDateMillis !== creationDateMillis,
        );
      });

      return { prevBasketData };
    },
    onError: (error, variables, context) => {
      const { prevBasketData } = context;
      queryClient.setQueryData(["basket"], prevBasketData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["delivery"] });
    },
  });
};
export const useConfirmProductFromDelivery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delivery"],
    mutationFn: async ({
      id,
      creationDateMillis,
      quantity,
    }: Partial<DeliveryProductType>) => {
      try {
        await axios.post(
          `${serverRoutes.confirm}/${id}`,
          { creationDateMillis, quantity },
          {
            withCredentials: true,
          },
        );
      } catch (error) {
        throw error.response.data;
      }
    },
    onMutate: (variables) => {
      const prevBasketData = queryClient.getQueryData(["delivery"]);

      const { id, creationDateMillis } = variables;
      queryClient.setQueryData(["delivery"], (prevData) => {
        return prevData.filter(
          (product) =>
            product.id !== id ||
            product.creationDateMillis !== creationDateMillis,
        );
      });

      return { prevBasketData };
    },
    onError: (error, variables, context) => {
      const { prevBasketData } = context;

      queryClient.setQueryData(["delivery"], prevBasketData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["delivery"] });
    },
  });
};
