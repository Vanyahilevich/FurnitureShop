import React, { FC } from "react";
import DeliveryCardLayout from "./delivery-card-layout";
import { DateTime } from "luxon";
import {
  useConfirmProductFromDelivery,
  useDeleteProductFromDelivery,
} from "src/services/delivery-api";
import { useFormattedDate } from "src/hooks/useFormattedDate";
import UIButton from "src/ui-kit/ui-button";

interface IDeliveryCardProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  currency: string;
  imageSrc: string;
  creationDateMillis: number;
  deliveryDateMillis: number;
}
const DeliveryCard: FC<IDeliveryCardProps> = ({
  id,
  name,
  price,
  quantity,
  currency,
  imageSrc,
  creationDateMillis,
  deliveryDateMillis,
}) => {
  const { mutate: deleteProductFromDelivery } = useDeleteProductFromDelivery();
  const { mutate: confirmDeliveryProduct } = useConfirmProductFromDelivery();
  const { creationDate, deliveryDate, timeDifference } = useFormattedDate(
    creationDateMillis,
    deliveryDateMillis,
  );

  const handleCancelDelivery = () => {
    deleteProductFromDelivery({ id, creationDateMillis, quantity });
  };
  const handleConfirmDelivery = () => {
    confirmDeliveryProduct({ id, creationDateMillis, quantity });
  };
  return (
    <DeliveryCardLayout
      id={id}
      name={name}
      price={price}
      quantity={quantity}
      currency={currency}
      imageSrc={imageSrc}
      creationDate={creationDate}
      deliveryDate={deliveryDate}
      timeDifference={timeDifference}
      cancelButton={
        <UIButton
          onClick={handleCancelDelivery}
          className="self-end"
          size={"sm"}
          variant={"add"}
        >
          Cancel delivery
        </UIButton>
      }
      confirmButton={
        <UIButton
          onClick={handleConfirmDelivery}
          size={"md"}
          variant={"details"}
        >
          Confirm delivery
        </UIButton>
      }
    />
  );
};
export default DeliveryCard;
