import DeleteButton from "src/shared/delete-button";
import BasketCardLayout from "./basket-card-layout";

import UICounter from "src/ui-kit/ui-counter";
import { FC, memo } from "react";
import {
  useDecreaseQuantityProductInBasket,
  useDeleteProductFromBasket,
  useIncreaseQuantityProductInBasket,
  useUpdateCountProductInBasket,
} from "src/services/basket-api";
interface IBasketCardProps {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
  imageSrc: string;
}

const BasketCard: FC<IBasketCardProps> = memo(
  ({ id, name, price, currency, quantity, imageSrc }) => {
    const { mutate: deleteProductFromBasket } = useDeleteProductFromBasket();

    const {
      mutate: increaseQuantityProductInBasket,
      error: errorIncreaseQuantity,
      variables: increaseVariables,
      isPending: increaseIsPending,
    } = useIncreaseQuantityProductInBasket();

    const {
      mutate: decreaseQuantityProductInBasket,
      variables: decreaseVariables,
      isPending: decreaseIsPending,
    } = useDecreaseQuantityProductInBasket();

    const optimicticQuantity = increaseIsPending
      ? increaseVariables?.quantity
      : decreaseVariables?.quantity || quantity;

    const totalPrice =
      currency + String((optimicticQuantity * price).toFixed(2));

    return (
      <BasketCardLayout
        id={id}
        name={name}
        totalPrice={totalPrice}
        price={price}
        currency={currency}
        imageSrc={imageSrc}
        errorText={errorIncreaseQuantity?.response.data.error}
        conter={
          <UICounter
            disabled={decreaseIsPending || increaseIsPending}
            quantity={optimicticQuantity}
            increment={() =>
              increaseQuantityProductInBasket({
                id,
                quantity: quantity + 1,
              })
            }
            decrement={() =>
              decreaseQuantityProductInBasket({
                id,
                quantity: quantity - 1,
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
  },
);

export default BasketCard;
