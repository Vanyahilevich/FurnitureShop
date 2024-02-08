import React, {FC} from 'react';
import CardName from "./CardName";
import CardPrice from "./CardPrice";
import Tooltip from "../../shared/Tooltip";
import IconButton from "../../shared/IconButton";
import {MdShoppingCart} from "react-icons/md";
import {CiHeart} from "react-icons/ci";
import CardLayout from "./CardLayout";
import Link from "../../components/Link";

interface IProductCardProps {
  title: string,
  price: number,
  src: string,
  currency: string,
}

const ProductCard: FC<IProductCardProps> = ({title, price, currency, src}) => {


  return (
    <CardLayout
      image={<img src={src} alt={"Light"}/>}
      info={
        <>
          <CardName>{title}</CardName>
          <CardPrice>{currency} {price}</CardPrice>
        </>
      }
      actions={
        <>
          <Link to="/product">
            <Tooltip title={"Basket"}>
              <IconButton onClick={() => {
              }}>
                <MdShoppingCart size={"18px"}/>
              </IconButton>
            </Tooltip>
          </Link>
          <Link to="/basket">
            <Tooltip title={"Like"}>
              <IconButton onClick={() => {
              }}>
                <CiHeart size={"18px"}/>
              </IconButton>
            </Tooltip>
          </Link>
        </>
      }
    />
  );
};

export default ProductCard;
