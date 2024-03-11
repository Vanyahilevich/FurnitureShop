import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { serverRoutes } from "src/routes";
import { DeliveryProductType, ProductType } from "src/types/product-type";

export const useGetProductsFromDelivery = (userId?: string) => {
  return useQuery({
    queryKey: ["delivery"],
    queryFn: async (): Promise<DeliveryProductType[]> => {
      const response = await axios.get(serverRoutes.delivery, {
        withCredentials: true,
      });
      return response.data;
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
    }: {
      id: string;
      creationDateMillis: number;
    }) => {
      // Получаем текущие данные из кеша перед удалением
      const prevBasketData = queryClient.getQueryData(["delivery"]);
      console.log(prevBasketData, id);
      // Оптимистическое обновление: Удаляем продукт из локальных данных
      queryClient.setQueryData(["delivery"], (prevData) => {
        return prevData.filter((product) => product.id !== id);
      });
      await axios.delete(
        `${serverRoutes.delivery}/${id}/${creationDateMillis}`,
        {
          withCredentials: true,
        },
      );
    },
    onMutate: (variables) => {
      // Обновляем локальные данные перед отправкой запроса
      const { id } = variables;
      queryClient.setQueryData(["delivery"], (prevData) => {
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
      creationDateMillis,
      quantity,
    }: Partial<DeliveryProductType>) => {
      // Получаем текущие данные из кеша перед удалением
      const prevBasketData = queryClient.getQueryData(["delivery"]);
      console.log(prevBasketData, id);

      // Оптимистическое обновление: Удаляем продукт из локальных данных
      queryClient.setQueryData(["delivery"], (prevData) => {
        return prevData.filter((product) => product.id !== id);
      });
      await axios.post(
        `${serverRoutes.confirm}/${id}`,
        { creationDateMillis, quantity },
        {
          withCredentials: true,
        },
      );
    },
    onMutate: (variables) => {
      // Обновляем локальные данные перед отправкой запроса
      const { id } = variables;
      queryClient.setQueryData(["delivery"], (prevData) => {
        return prevData.filter((product) => product.id !== id);
      });

      // Возвращаем объект для использования в onSettled
      return { id };
    },
    onError: (error, variables, context) => {
      // Восстанавливаем локальные данные в случае ошибки
      const { id } = context;
      queryClient.setQueryData(["delivery"], (prevData) => {
        return [...prevData, { id }];
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["delivery"] });
    },
  });
};
