import DeleteButton from "src/shared/delete-button";
import BasketCardLayout from "./basket-card-layout";

import UICounter from "src/ui-kit/ui-counter";
import { FC, memo } from "react";
import {
  useDecreaseQuantityProductInBasket,
  useDeleteProductFromBasket,
  useIncreaseQuantityProductInBasket,
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
      isSuccess: increaseIsSuccess,
    } = useIncreaseQuantityProductInBasket();

    const {
      mutate: decreaseQuantityProductInBasket,
      variables: decreaseVariables,
      isPending: decreaseIsPending,
      isSuccess: decreaseIsSuccess,
    } = useDecreaseQuantityProductInBasket();
    let optimicticQuantity = quantity;
    if (increaseIsPending) {
      optimicticQuantity = increaseVariables.quantity;
    }
    if (decreaseIsPending) {
      optimicticQuantity = Math.max(decreaseVariables.quantity, 1);
    }

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
        errorText={errorIncreaseQuantity?.error}
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
          <DeleteButton onClick={() => deleteProductFromBasket({ id })} />
        }
      />
    );
  },
);

export default BasketCard;
