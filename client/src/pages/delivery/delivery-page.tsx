import useIsAuth from "src/hooks/useIsAuth";
import { useGetProductsFromDelivery } from "src/services/delivery-api";
import DeliveryCard from "src/widgets/delivery-card/delivery-card";
import EmptyContentDelivery from "./empty-content-delivery";
import DeliveryLayoutPage from "./delivery-layout-page";
import { serverRoutes } from "src/routes";
import DeliveryListSkeleton from "src/widgets/delivery-card/delivery-card-skeleton";

const DeliveryPage = () => {
  const { isAuthenticated, authJSX, userId } = useIsAuth();
  const {
    data: productsFromDelivery,
    isLoading: deliveryProductsIsLoading,
    isSuccess,
  } = useGetProductsFromDelivery(userId);

  if (!isAuthenticated) {
    return authJSX;
  }

  const emptyDelivery = productsFromDelivery?.length === 0;
  if (emptyDelivery) {
    return <EmptyContentDelivery />;
  }

  return (
    <DeliveryLayoutPage>
      {deliveryProductsIsLoading ? (
        <DeliveryListSkeleton />
      ) : (
        isSuccess &&
        productsFromDelivery.map(
          ({
            id,
            name,
            price,
            quantity,
            currency,
            creationDateMillis,
            image,
            deliveryDateMillis,
          }) => {
            return (
              <DeliveryCard
                key={creationDateMillis}
                id={id}
                name={name}
                price={price}
                currency={currency}
                quantity={quantity}
                imageSrc={image && serverRoutes.image + image}
                creationDateMillis={creationDateMillis}
                deliveryDateMillis={deliveryDateMillis}
              />
            );
          },
        )
      )}
    </DeliveryLayoutPage>
  );
};

export default DeliveryPage;
