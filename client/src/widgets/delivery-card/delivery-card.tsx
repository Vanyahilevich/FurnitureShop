import React, { FC } from "react";
import DeliveryCardLayout from "./delivery-card-layout";
import { DateTime } from "luxon";
import {
  useConfirmProductFromDelivery,
  useDeleteProductFromDelivery,
} from "src/services/delivery-api";
import { useFormattedDate } from "src/hooks/useFormattedDate";

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
      handleCancelDelivery={() => {
        console.log(creationDateMillis);
        deleteProductFromDelivery({ id, creationDateMillis });
      }}
      handleConfirmDelivery={() => {
        confirmDeliveryProduct({ id, creationDateMillis, quantity });
      }}
    />
  );
};
export default DeliveryCard;
