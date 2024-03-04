import DeleteButton from "src/shared/delete-button";
import BasketCardLayout from "./basket-card-layout";
import {
  useDeleteProductFromBasket,
  useUpdateCountProductInBasket,
} from "./basket-api";
import UICounter from "src/ui-kit/ui-counter";
import { FC } from "react";
interface IBasketCardProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  imageSrc: string;
}

const BasketCard: FC<IBasketCardProps> = ({
  id,
  name,
  price,
  currency,
  quantity,
  imageSrc,
}) => {
  const { mutate: deleteProductFromBasket } = useDeleteProductFromBasket();
  const {
    mutate: updateCountProductInBasket,
    isPending: isLoadingCount,
    isError: isErrorUpdate,
    error: errorUpdate,
  } = useUpdateCountProductInBasket();

  const totalPrice = currency + String((quantity * price).toFixed(2));

  const operation = {
    add: 1,
    remove: -1,
  };
  return (
    <BasketCardLayout
      id={id}
      name={name}
      totalPrice={totalPrice}
      price={price}
      currency={currency}
      imageSrc={imageSrc}
      errorText={errorUpdate?.response.data.error}
      conter={
        <UICounter
          disabled={isLoadingCount}
          quantity={quantity}
          increment={() =>
            updateCountProductInBasket({
              id,
              operation: operation.add,
              count: quantity,
            })
          }
          decrement={() =>
            updateCountProductInBasket({
              id,
              operation: operation.remove,
              count: quantity,
            })
          }
        />
      }
      deleteAction={
        <DeleteButton
          onClick={() => deleteProductFromBasket(id)}
          title={"Delete product"}
        />
      }
    />
  );
};

export default BasketCard;
