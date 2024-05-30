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
import { serverRoutes } from "src/routes";
import BasketListSkeleton from "src/widgets/basket-card/basket-card-skeleton";

const BasketPage = () => {
  const {
    isAuthenticated,
    authJSX,
    isLoading: authIsLoading,
    userId,
  } = useIsAuth();
  const {
    data: productsFromBasket,
    isLoading: productsIsLoading,
    isSuccess,
  } = useGetProductsFromBasket(userId);
  const { mutate: deleteAllProductsFromBasket } =
    useDeleteAllProductsFromBasket();
  const { mutate: purchaseProducts } = usePurchaseProducts();

  const emptyBasket = !authIsLoading && productsFromBasket?.length === 0;

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
    purchaseProducts({ productsFromBasket });
  };
  return (
    <BasketLayoutPage
      products={
        <>
          {productsIsLoading ? (
            <BasketListSkeleton />
          ) : (
            isSuccess &&
            productsFromBasket?.map(
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
            )
          )}
        </>
      }
      totalPrice={isSuccess && `Total: $${totalPrice}`}
      actionDeleteButton={
        isSuccess && (
          <UIButton
            onClick={() => deleteAllProductsFromBasket()}
            size={"sm"}
            variant={"subscribe"}
          >
            Delete products
          </UIButton>
        )
      }
      actionBuyButton={
        isSuccess && (
          <UIButton onClick={handlePurchaseProduct} size={"md"} variant={"pay"}>
            Purchase products
          </UIButton>
        )
      }
    />
  );
};

export default BasketPage;
