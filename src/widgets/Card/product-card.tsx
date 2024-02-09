import React, { FC } from "react";
import CardName from "./CardName";
import CardPrice from "./CardPrice";
import CardLayout from "./CardLayout";
import AddToBasketButton from "../../shared/AddToBasketButton";
import AddToFavoriteButton from "../../shared/AddToFavoriteButton";
import SearchButton from "../../shared/SearchButton";

interface IProductCardProps {
  title: string;
  price: number;
  src: string;
  currency: string;
}

const ProductCard: FC<IProductCardProps> = ({
  title,
  price,
  currency,
  src,
}) => {
  return (
    <CardLayout
      imageSrc={src}
      info={
        <>
          <CardName>{title}</CardName>
          <CardPrice>
            {currency} {price}
          </CardPrice>
        </>
      }
      actions={
        <>
          <AddToBasketButton />
          <AddToFavoriteButton />
        </>
      }
    />
  );
};

export default ProductCard;
