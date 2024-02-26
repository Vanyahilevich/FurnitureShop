import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { serverRoutes } from "src/routes";

const BasketPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["basket"],
    queryFn: async () => {
      const response = await axios.get(serverRoutes.basket, {
        withCredentials: true,
      });
      return response.data;
    },
  });

  console.log(data);
  return <div></div>;
};

export default BasketPage;
