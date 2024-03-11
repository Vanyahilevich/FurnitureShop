import { Disclosure, Transition } from "@headlessui/react";

import { FC } from "react";
import { Link } from "react-router-dom";
import { clientRoutes } from "src/routes";
import UIButton from "src/ui-kit/ui-button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import clsx from "clsx";
interface IDeliveryCardLayoutProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  currency: string;
  imageSrc: string;
  creationDate: string;
  deliveryDate: string;
  timeDifference: string;
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
  deliveryDate,
  timeDifference,
  handleCancelDelivery,
  handleConfirmDelivery,
}) => {
  return (
    <div className="flex  flex-col max-w-[calc(50%-10px)]  text-sm text-slate-500 ">
      <Link to={clientRoutes.product + id} className="">
        <div className="max-h-80 overflow-hidden bg-slate-300">
          <img
            className="w-auto h-auto object-cover"
            src={imageSrc}
            alt={name}
          />
        </div>
      </Link>
      <div className=" pt-2 pb-6 ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full relative mb-2 text-left ">
                <div className="text-xl text-black mb-1">{name}</div>
                <div className="">
                  Delivery will be in{" "}
                  <span className="font-bold">{timeDifference}</span>
                </div>

                <FaPlus
                  className={clsx(
                    "w-5 h-5 text-black",
                    "absolute bottom-1/2 right-0 translate-y-1/2",
                    "transform  transition-all ",
                    open ? "rotate-0" : "rotate-180",
                    open ? "opacity-0" : "opacity-100",
                  )}
                />
                <FaMinus
                  className={clsx(
                    "w-5 h-5 text-black",
                    "absolute bottom-1/2 right-0 translate-y-1/2",
                    "transform transition-all ",
                    open ? "rotate-0" : "rotate-180",
                    open ? "opacity-100" : "opacity-0",
                  )}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="">
                  <div>
                    Adress delivery:{" "}
                    <span className="font-bold">
                      Lorem ipsum dolor sit amet.
                    </span>
                  </div>
                  <div>
                    The order has been placed:{" "}
                    <span className="font-bold">{creationDate}</span>
                  </div>
                  <div className="">
                    The delivery will arrive:{" "}
                    <span className="font-bold"> {deliveryDate}</span>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
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
