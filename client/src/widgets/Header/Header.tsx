import Link from "../../ui-kit/ui-link";
import HeaderLayout from "./header-layout";
import Logo from "./Logo";
import BasketButton from "../../shared/basket-button";
import FavoriteButton from "../../shared/favorite-button";
import LoginButton from "src/shared/login-button";
import ProfileButton from "src/shared/profile-button";
import LogoutButton from "src/shared/logout-button";
import DeliveryButton from "src/shared/delivery-button";
import { useGetProductsFromDelivery } from "src/services/delivery-api";
import { useGetProductsFromBasket } from "src/services/basket-api";
import { useAuth, useLogout } from "src/services/auth";

const Header = () => {
  const { data: auth } = useAuth();
  const { mutate: Logout } = useLogout();
  const { data: productsFromBasket } = useGetProductsFromBasket();
  const { data: productsFromDelivery } = useGetProductsFromDelivery();
  return (
    <HeaderLayout
      logo={<Logo />}
      links={
        <>
          <Link to={"/products"}>Products</Link>
          <Link to={"/v"}>test vanya</Link>
          <Link to={"/p"}>test pasha</Link>
        </>
      }
      actions={
        <>
          <FavoriteButton />
          <BasketButton badgeValue={productsFromBasket?.length} />
          <DeliveryButton badgeValue={productsFromDelivery?.length} />
          {!auth && <LoginButton />}
          {auth && <LogoutButton onClick={Logout} />}
          <ProfileButton />
        </>
      }
    />
  );
};

export default Header;
