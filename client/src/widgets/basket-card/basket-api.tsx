import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { serverRoutes } from "src/routes";

export const useDeleteProductFromBasket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket"],
    mutationFn: async (id: string) => {
      await axios.delete(`${serverRoutes.basket}/${id}`, {
        withCredentials: true,
      });
    },
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};
export const useUpdateCountProductInBasket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket"],
    mutationFn: async ({ id, operation, count }: any) => {
      await axios.put(
        `${serverRoutes.basket}/${id}`,
        { operation, count },
        {
          withCredentials: true,
        },
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};
