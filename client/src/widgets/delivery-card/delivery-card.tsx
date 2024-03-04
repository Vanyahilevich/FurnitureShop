import React, { FC } from "react";
import DeliveryCardLayout from "./delivery-card-layout";
import {
  useConfirmProductFromDelivery,
  useDeleteProductFromDelivery,
} from "src/services/delivery-api";

interface IDeliveryCardProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  currency: string;
  imageSrc: string;
  creationDate: number;
}
const DeliveryCard: FC<IDeliveryCardProps> = ({
  id,
  name,
  price,
  quantity,
  currency,
  imageSrc,
  creationDate,
}) => {
  const { mutate: deleteProductFromDelivery } = useDeleteProductFromDelivery();
  const { mutate: confirmDeliveryProduct } = useConfirmProductFromDelivery();
  return (
    <DeliveryCardLayout
      id={id}
      name={name}
      price={price}
      quantity={quantity}
      currency={currency}
      imageSrc={imageSrc}
      creationDate={creationDate}
      handleCancelDelivery={() => {
        deleteProductFromDelivery({ id, creationDate });
      }}
      handleConfirmDelivery={() => {
        confirmDeliveryProduct({ id, creationDate, quantity });
      }}
    />
  );
};

export default DeliveryCard;
