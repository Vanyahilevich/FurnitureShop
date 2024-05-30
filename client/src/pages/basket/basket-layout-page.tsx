import { FC, ReactNode } from "react";

interface IBasketLayoutPageProps {
  products: ReactNode;
  totalPrice: string | boolean;
  actionDeleteButton: ReactNode;
  actionBuyButton: ReactNode;
}

const BasketLayoutPage: FC<IBasketLayoutPageProps> = ({
  products,
  totalPrice,
  actionDeleteButton,
  actionBuyButton,
}) => {
  return (
    <div className="flex flex-col flex-auto items-center">
      <div className="flex flex-col flex-auto w-full items-center gap-5">
        {products}
      </div>
      <div className="text-sm sm:text-lg self-end mb-4 sm:mb-10">
        {totalPrice}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 self-end ">
        <div className="self-end">{actionDeleteButton}</div>
        <div>{actionBuyButton}</div>
      </div>
    </div>
  );
};

export default BasketLayoutPage;
