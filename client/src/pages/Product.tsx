import { React, useState, useEffect } from "react";
import UIButton from "../ui-kit/ui-button";

import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { serverRoutes } from "../routes";
import axios from "axios";
import { ProductType } from "../types/ProductType";
import { Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface IProduct {
  name: string;
  _id: object;
  id: string;
  price: number;
  description: string;
  currency: string;
  quantity: number;
  image: string;
}

const Product = () => {
  const { id } = useParams();

  const {
    isPending: isPendingProduct,
    error: errorProduct,
    data: product,
  } = useQuery({
    queryKey: ["product" + id, id],
    queryFn: async (): Promise<ProductType> => {
      const response = await axios.get(`${serverRoutes.product}${id}`);
      console.log(response.data);
      return response.data;
    },
  });

  const {
    isPending: isPendingSimilar,
    error: errorSimilar,
    data: similar,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<ProductType> => {
      const response = await axios.get(`${serverRoutes.similarProducts}${id}`);
      console.log(response.data);
      return response.data;
    },
  });

  const isFoundProduct = product && !isPendingProduct;
  const isFoundSimilar = similar && !isPendingSimilar;

  if (errorProduct) return "An error has occurred: " + errorProduct.message;
  if (errorSimilar) return "An error has occurred: " + errorSimilar.message;

  return (
    <div>
      <div className="flex  gap-7">
        <div className="h-[33rem] w-[33rem]"></div>
        <div>
          {product && (
            <div className="font-primaryFont text-4xl pb-5">{product.name}</div>
          )}
          {product && (
            <div className="text-lightBlueHover text-2xl font-semibold pb-11">
              {product.currency}
              {product.price}
            </div>
          )}
          {product && (
            <div className="max-w-md text-base text-lightBlueHover pb-10">
              {product.description}
            </div>
          )}
          <UIButton size={"lg"} variant="details">
            Buy
          </UIButton>
        </div>
      </div>

      <div>
        <div className="font-primaryFont text-end font-normal text-4xl pb-12">
          Best items
        </div>
        <div className="flex justify-around text-xl font-light">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            className="w-[1152px] h-full"
          >
            {similar &&
              similar.map((product, index) => {
                return (
                  <SwiperSlide
                    key={product}
                    virtualIndex={index}
                    className="w-40 h-40"
                  >
                    <div className="w-[15rem] h-[20rem]">
                      {/* <img src={imageBest} alt="product" /> */}
                    </div>
                    <div className="text-darkBlueHover">{product.name}</div>
                    <div className="text-darkBlueClick">
                      {product.currency}
                      {product.price}
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Product;
