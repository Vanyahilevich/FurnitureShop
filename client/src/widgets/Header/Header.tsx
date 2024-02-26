import React from "react";
import Link from "../../components/Link";
import HeaderLayout from "./header-layout";
import Logo from "./Logo";
import BasketButton from "../../shared/BasketButton";
import FavoriteButton from "../../shared/FavoriteButton";
import { clientRoutes, serverRoutes } from "src/routes";
import LoginButton from "src/shared/login-button";
import ProfileButton from "src/shared/profile-button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import LogoutButton from "src/shared/logout-button";

const Header = () => {
  const queryClient = useQueryClient();

  const { data, isPending, error, isError, isSuccess } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const response = await axios.post(serverRoutes.auth, null, {
        withCredentials: true,
      });
      console.log("response", response);
      return response.data;
    },
  });
  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: async () => {
      await axios.post(serverRoutes.logout, null, { withCredentials: true });
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth"], null);
      queryClient.refetchQueries(["auth"]);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });

  return (
    <HeaderLayout
      logo={<Logo />}
      links={
        <>
          <Link to={"/products"}>Products</Link>
          <Link to={"/basket"}>Basket</Link>
          <Link to={"/delivery"}>Delivery</Link>
          <Link to={"/products/1"}> one products</Link>
          <Link to={"/v"}>test vanya</Link>
          <Link to={"/p"}>test pasha</Link>
        </>
      }
      actions={
        <>
          <FavoriteButton />
          <BasketButton />
          {!data && <LoginButton />}
          {data && <LogoutButton onClick={mutate} />}
          <ProfileButton />
        </>
      }
    />
  );
};

export default Header;
