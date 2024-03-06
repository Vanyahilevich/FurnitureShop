import useIsAuth from "src/hooks/useIsAuth";
import {
  useDeleteAllProductsFromBasket,
  useGetProductsFromBasket,
  usePurchaseProducts,
} from "src/services/basket-api";
import UIButton from "src/ui-kit/ui-button";
import BasketCard from "src/widgets/basket-card/basket-card";
import EmptyContentBasket from "./empty-content-basket";
import BasketLayoutPage from "./basket-layout-page";
import { useNavigate } from "react-router-dom";
import { serverRoutes } from "src/routes";

const BasketPage = () => {
  const { isAuthenticated, authJSX, isLoading, userId } = useIsAuth();
  const { data: productsFromBasket } = useGetProductsFromBasket(userId);
  const { mutate: deleteAllProductsFromBasket } =
    useDeleteAllProductsFromBasket();
  const { mutate: purchaseProducts } = usePurchaseProducts();

  const navigate = useNavigate();

  const emptyBasket = !isLoading && productsFromBasket?.length === 0;

  if (!isAuthenticated) {
    return authJSX;
  }
  if (emptyBasket) {
    return <EmptyContentBasket />;
  }
  const totalPrice = productsFromBasket
    ?.reduce((totalPrice, product) => {
      return (totalPrice += product.price * product.quantity);
    }, 0)
    .toFixed(2);

  const handlePurchaseProduct = () => {
    purchaseProducts(productsFromBasket ?? []);
  };
  return (
    <BasketLayoutPage
      products={
        <>
          {productsFromBasket &&
            productsFromBasket.map(
              ({ id, name, price, quantity, currency, image }) => {
                return (
                  <BasketCard
                    key={name}
                    id={id}
                    name={name}
                    price={price}
                    currency={currency}
                    quantity={quantity}
                    imageSrc={image && serverRoutes.image + image}
                  />
                );
              },
            )}
        </>
      }
      totalPrice={`Total: $${totalPrice}`}
      actionDeleteButton={
        <UIButton
          onClick={() => deleteAllProductsFromBasket()}
          size={"sm"}
          variant={"subscribe"}
        >
          Delete products
        </UIButton>
      }
      actionBuyButton={
        <UIButton onClick={handlePurchaseProduct} size={"md"} variant={"pay"}>
          Purchase products
        </UIButton>
      }
    />
  );
};

export default BasketPage;
