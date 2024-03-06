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
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["basket"] });
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
    mutationFn: async (id: string) => {
      // Получаем текущие данные из кеша перед удалением
      const prevBasketData = queryClient.getQueryData(["basket"]);
      console.log(prevBasketData, id);

      // Оптимистическое обновление: Удаляем продукт из локальных данных
      queryClient.setQueryData(["basket"], (prevData) => {
        return prevData.filter((product) => product.id !== id);
      });

      await axios.delete(`${serverRoutes.basket}/${id}`, {
        withCredentials: true,
      });
    },
    onMutate: (variables) => {
      // Обновляем локальные данные перед отправкой запроса
      const { id } = variables;
      queryClient.setQueryData(["basket"], (prevData) => {
        return prevData.filter((product) => product.id !== id);
      });

      // Возвращаем объект для использования в onSettled
      return { id };
    },
    onError: (error, variables, context) => {
      // Восстанавливаем локальные данные в случае ошибки
      const { id } = context;
      queryClient.setQueryData(["basket"], (prevData) => {
        return [...prevData, { id }];
      });
    },
    onSettled: async (data, error, variables, context) => {
      return await queryClient.invalidateQueries({ queryKey: ["basket"] });
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
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: ["basket"] });
    },
  });
};

export const useIncreaseQuantityProductInBasket = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["basket"],
    mutationFn: async ({ id, quantity }: any) => {
      await axios.put(
        `${serverRoutes.basketIncrease}/${id}`,
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
