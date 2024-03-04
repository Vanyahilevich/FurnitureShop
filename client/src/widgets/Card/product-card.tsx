import { FC } from "react";
import CardLayout from "./CardLayout";
import AddToBasketButton from "../../shared/add-product-in-basket-button";
import AddToFavoriteButton from "../../shared/add-product-in-favorite-button";
import { useAddProductTobasket } from "src/services/basket-api";

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

  const productAlredyInBasket = error?.message;

  return (
    <CardLayout
      id={id}
      imageSrc={src}
      title={title}
      currency={currency}
      price={price}
      quantity={quantity}
      highlightSearchText={highlightSearchText}
      actions={
        <>
          <AddToBasketButton
            onClick={() => addProductToBasket({ id, quantity })}
          />
          <AddToFavoriteButton onClick={() => {}} />
        </>
      }
      textError={productAlredyInBasket}
    />
  );
};

export default ProductCard;
