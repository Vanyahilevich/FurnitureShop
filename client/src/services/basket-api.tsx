import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { serverRoutes } from "src/routes";
import { ProductType } from "src/types/product-type";

export const useGetProductsFromBasket = (userId?: string) => {
  return useQuery({
    queryKey: ["basket"],
    queryFn: async (): Promise<ProductType[]> => {
      const response = await axios.get(serverRoutes.basket, {
        withCredentials: true,
      });
      return response.data;
    },
    enabled: !!userId,
  });
};

export const useAddProductTobasket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket"],
    mutationFn: async ({ id }: { id?: string }) => {
      try {
        await axios.post(
          `${serverRoutes.basket}/${id}`,
          {},
          {
            withCredentials: true,
          },
        );
      } catch (error) {
        throw error.response.data;
      }
    },
    onMutate: (variables) => {
      const { id } = variables;
      const previousBasket = queryClient.getQueryData(["basket"]);

      queryClient.setQueryData(["basket"], (prevData) => {
        return [...prevData, { id }];
      });
      return { previousBasket };
    },
    onError: (error, variables, context) => {
      const { previousBasket } = context;
      queryClient.setQueryData(["basket"], previousBasket);
    },
    onSettled: async (data, error, variables, context) => {
      await queryClient.invalidateQueries({ queryKey: ["basket"] });
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
    onMutate: (variables) => {
      const previousBasket = queryClient.getQueryData(["basket"]);
      queryClient.setQueryData(["basket"], []);
      return { previousBasket };
    },
    onError: (error, variables, context) => {
      const { previousBasket } = context;
      queryClient.setQueryData(["basket"], previousBasket);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};

export const usePurchaseProducts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket", "delivery"],
    mutationFn: async ({
      productsFromBasket,
    }: {
      productsFromBasket: ProductType[];
    }) => {
      try {
        await axios.post(serverRoutes.purchase, productsFromBasket, {
          withCredentials: true,
        });
      } catch (error) {
        throw error.response.data;
      }
    },
    onMutate: (variables) => {
      const { productsFromBasket } = variables;
      const previousBasket = queryClient.getQueryData(["basket"]);
      const previousDelivery = queryClient.getQueryData(["delivery"]);

      queryClient.setQueryData(["basket"], []);
      queryClient.setQueryData(["delivery"], (prevData) => {
        return [...prevData, ...productsFromBasket];
      });

      return { previousBasket, previousDelivery };
    },
    onError: (error, variables, context) => {
      const { previousBasket, previousDelivery } = context;
      queryClient.setQueryData(["basket"], previousBasket);
      queryClient.setQueryData(["delivery"], previousDelivery);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["basket"] });
      await queryClient.invalidateQueries({ queryKey: ["delivery"] });
    },
  });
};

export const useDeleteProductFromBasket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket"],
    mutationFn: async ({ id }: { id: string }) => {
      try {
        await axios.delete(`${serverRoutes.basket}/${id}`, {
          withCredentials: true,
        });
      } catch (error) {
        throw error.response.data;
      }
    },
    onMutate: (variables) => {
      // Обновляем локальные данные перед отправкой запроса
      const { id } = variables;
      const previousBasket = queryClient.getQueryData(["basket"]);

      queryClient.setQueryData(["basket"], (prevData) => {
        return prevData.filter((product) => product.id !== id);
      });

      // Возвращаем объект для использования в onError
      return { previousBasket };
    },
    onError: (error, variables, context) => {
      // Восстанавливаем локальные данные в случае ошибки
      const { previousBasket } = context;
      queryClient.setQueryData(["basket"], previousBasket);
    },
    onSettled: async (data, error, variables, context) => {
      return await queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};
export const useIncreaseQuantityProductInBasket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket"],
    mutationFn: async ({ id, quantity }: any) => {
      try {
        await axios.put(
          `${serverRoutes.basketIncrease}/${id}`,
          { quantity },
          {
            withCredentials: true,
          },
        );
      } catch (error) {
        throw error.response.data;
      }
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};
export const useDecreaseQuantityProductInBasket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket"],
    mutationFn: async ({ id, quantity }: any) => {
      await axios.put(
        `${serverRoutes.basketDecrease}/${id}`,
        { quantity },
        {
          withCredentials: true,
        },
      );
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};
