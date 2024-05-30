import { FC, useState } from "react";
import AddToBasketButton from "../../shared/add-product-in-basket-button";
import AddToFavoriteButton from "../../shared/add-product-in-favorite-button";
import { useAddProductTobasket } from "src/services/basket-api";
import ProductCardModal from "./product-card-modal";
import ProductCardLayout from "./product-card-layout";
import { useAuth } from "src/services/auth-api";
import { useAuthAndCall } from "src/hooks/useAuthAndCall";

interface IProductCardProps {
  id: string;
  title: string;
  price: number;
  src: string;
  currency: string;
  quantity: number;
  highlightSearchText: string;
}

const ProductCard: FC<IProductCardProps> = ({
  id,
  title,
  price,
  currency,
  src,
  quantity,
  highlightSearchText,
}) => {
  const { mutate: addProductToBasket, error } = useAddProductTobasket();
  const { handleFn, modalJSX } = useAuthAndCall(() =>
    addProductToBasket({ id }),
  );
  const productAlredyInBasket = error?.message;

  return (
    <>
      {modalJSX}
      <ProductCardLayout
        id={id}
        imageSrc={src}
        title={title}
        currency={currency}
        price={price}
        quantity={quantity}
        highlightSearchText={highlightSearchText}
        actions={
          <>
            <AddToBasketButton onClick={handleFn} left />
            {/* <AddToFavoriteButton onClick={() => {}} /> */}
          </>
        }
        textError={productAlredyInBasket}
      />
    </>
  );
};

export default ProductCard;
