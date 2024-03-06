import useIsAuth from "src/hooks/useIsAuth";
import { useGetProductsFromDelivery } from "src/services/delivery-api";
import DeliveryCard from "src/widgets/delivery-card/delivery-card";
import EmptyContentDelivery from "./empty-content-delivery";
import DeliveryLayoutPage from "./delivery-layout-page";
import { serverRoutes } from "src/routes";

const DeliveryPage = () => {
  const { isAuthenticated, authJSX, userId } = useIsAuth();
  const { data: productsFromDelivery } = useGetProductsFromDelivery(userId);

  if (!isAuthenticated) {
    return authJSX;
  }

  const emptyDelivery = productsFromDelivery?.length === 0;
  if (emptyDelivery) {
    return <EmptyContentDelivery />;
  }

  return (
    <DeliveryLayoutPage>
      {productsFromDelivery &&
        productsFromDelivery.map(
          ({ id, name, price, quantity, currency, creationDate, image }) => {
            return (
              <DeliveryCard
                key={name}
                id={id}
                name={name}
                price={price}
                currency={currency}
                quantity={quantity}
                imageSrc={image && serverRoutes.image + image}
                creationDate={creationDate}
              />
            );
          },
        )}
    </DeliveryLayoutPage>
  );
};

export default DeliveryPage;
