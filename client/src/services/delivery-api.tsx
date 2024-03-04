import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { serverRoutes } from "src/routes";
import { DeliveryProductType, ProductType } from "src/types/product-type";

export const useGetProductsFromDelivery = () => {
  return useQuery({
    queryKey: ["delivery"],
    queryFn: async (): Promise<DeliveryProductType[]> => {
      const response = await axios.get(serverRoutes.delivery, {
        withCredentials: true,
      });
      return response.data;
    },
  });
};

export const useDeleteProductFromDelivery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delivery"],
    mutationFn: async ({
      id,
      creationDate,
    }: {
      id: string;
      creationDate: number;
    }) => {
      await axios.delete(`${serverRoutes.delivery}/${id}/${creationDate}`, {
        withCredentials: true,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["delivery"] });
    },
  });
};

export const useAddProductsInDelivery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delivery"],
    mutationFn: async (productsInBasket: ProductType[]) => {
      await axios.post(serverRoutes.delivery, productsInBasket, {
        withCredentials: true,
      });
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
      creationDate,
      quantity,
    }: Partial<DeliveryProductType>) => {
      await axios.post(
        `${serverRoutes.confirm}/${id}`,
        { creationDate, quantity },
        {
          withCredentials: true,
        },
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["delivery"] });
    },
  });
};
