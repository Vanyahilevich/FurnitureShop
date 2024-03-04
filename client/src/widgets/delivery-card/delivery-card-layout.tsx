import React, { FC } from "react";
import UIButton from "src/ui-kit/ui-button";

interface IDeliveryCardLayoutProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  currency: string;
  imageSrc: string;
  creationDate: number;
  handleCancelDelivery: () => void;
  handleConfirmDelivery: () => void;
}

const DeliveryCardLayout: FC<IDeliveryCardLayoutProps> = ({
  id,
  name,
  price,
  quantity,
  currency,
  imageSrc,
  creationDate,
  handleCancelDelivery,
  handleConfirmDelivery,
}) => {
  return (
    <div className="flex  flex-col w-1/2 p-5">
      <div className="w-full h-60 overflow-hidden bg-slate-300">
        <img src={imageSrc} alt="" />
      </div>
      <div className="text-lg">{name}</div>
      <div className="text-sm text-slate-500">Adress delivery: 213221</div>
      <div className="text-sm text-slate-500">Delivery time: </div>
      <div className="text-sm text-slate-500">
        creationDate: {creationDate} ----- {quantity}
      </div>

      <div className="flex self-end gap-5">
        <UIButton
          onClick={handleCancelDelivery}
          className="self-end"
          size={"sm"}
          variant={"add"}
        >
          Cancel delivery
        </UIButton>
        <UIButton
          onClick={handleConfirmDelivery}
          size={"md"}
          variant={"details"}
        >
          Confirm delivery
        </UIButton>
      </div>
    </div>
  );
};

export default DeliveryCardLayout;
