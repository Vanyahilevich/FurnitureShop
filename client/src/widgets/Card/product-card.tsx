import React, { FC } from "react";
import CardName from "./CardName";
import CardPrice from "./CardPrice";
import CardLayout from "./CardLayout";
import AddToBasketButton from "../../shared/AddToBasketButton";
import AddToFavoriteButton from "../../shared/AddToFavoriteButton";
import SearchButton from "../../shared/SearchButton";
import { useNavigate } from "react-router-dom";

interface IProductCardProps {
  id: string;
  title: string;
  price: number;
  src: string;
  currency: string;
  addToBasket?: () => void;
  addToFavorite?: () => void;
}

const ProductCard: FC<IProductCardProps> = ({
  id,
  title,
  price,
  currency,
  src,
  addToBasket,
  addToFavorite,
}) => {
  const navigate = useNavigate();
  const handleClickProduct = () => {
    navigate(`/products/${id}`);
  };
  return (
    <CardLayout
      onClick={handleClickProduct}
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
          <AddToBasketButton onClick={addToBasket} />
          <AddToFavoriteButton onClick={addToFavorite} />
        </>
      }
    />
  );
};

export default ProductCard;
