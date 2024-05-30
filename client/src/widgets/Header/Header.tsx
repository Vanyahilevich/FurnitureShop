import Link from "../../ui-kit/ui-link";
import Logo from "./logo";
import BasketButton from "../../shared/basket-button";
import FavoriteButton from "../../shared/favorite-button";
import LoginButton from "src/shared/login-button";
import DeliveryButton from "src/shared/delivery-button";
import { useGetProductsFromDelivery } from "src/services/delivery-api";
import { useGetProductsFromBasket } from "src/services/basket-api";
import { useAuth, useLogout } from "src/services/auth-api";
import HeaderLayout from "./header-layout";
import ProfileAvatar from "../profile-avatar/profile-avatar";

const Header = () => {
  const { data: auth } = useAuth();
  const { mutate: Logout } = useLogout();
  const { data: productsFromBasket } = useGetProductsFromBasket(auth?.id);
  const { data: productsFromDelivery } = useGetProductsFromDelivery(auth?.id);
  return (
    <HeaderLayout
      logo={<Logo />}
      links={
        <>
          <Link to={"/products"}>Products</Link>
        </>
      }
      actions={
        <>
          {/* <FavoriteButton /> */}
          <BasketButton badgeValue={productsFromBasket?.length} />
          <DeliveryButton badgeValue={productsFromDelivery?.length} />
        </>
      }
      auth={
        <>
          {!auth && <LoginButton />}
          {auth && <ProfileAvatar />}
        </>
      }
    />
  );
};

export default Header;
