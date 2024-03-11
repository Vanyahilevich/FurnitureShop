import { React, useState, useEffect } from "react";
import UIButton from "./ui-kit/UIButton";
import imageProduct from "../public/black-desk-lamp.jpg";
import imageBest from "../public/white_light.jpg";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { serverRoutes } from "./routes";
import axios from "axios";
import { ProductType } from "./types/ProductType";

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

const PTest = () => {
  const [product, setProduct] = useState<IProduct>({});
  const [products, setProducts] = useState<IProduct[]>([]);

  const { id } = useParams("2");

  const { isPending, error, data } = useQuery({
    queryKey: ["product" + id, id],
    queryFn: async (): Promise<ProductType> => {
      const response = await axios.get(serverRoutes.product + id);
      return response.data;
    },
  });

  const isFoundProduct = data && data.length !== 0 && !isPending;
  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  const getProduct = async () => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data: IProduct = await response.json();
    // console.log(data);
    setProduct(data);
  };

  // const getProducts = async () => {
  //   const response = await fetch(
  //     `http://localhost:3000/products?_start=0&_end=4`,
  //   );
  //   const data: IProduct = await response.json();

  //   setProducts(data);
  // };

  useEffect(() => {
    console.log("start");

    getProduct();
    // getProducts();
    console.log("end");
  }, []);

  return (
    <div>
      <div className="flex  gap-7">
        <div className="h-[33rem] w-[33rem]">
          <img src={imageProduct} alt="product" />
        </div>
        <div>
          {product && (
            <div className="font-primaryFont text-5xl pb-5">{product.name}</div>
          )}
          {product && (
            <div className="text-lightBlueHover text-4xl font-semibold pb-11">
              {product.currency}
              {product.price}
            </div>
          )}
          {product && (
            <div className="max-w-md text-lg text-lightBlueHover pb-10">
              {product.description}
            </div>
          )}
          <UIButton size={"lg"} variant="details">
            Buy
          </UIButton>
        </div>
      </div>
      {/* <div className="h-0.5 max-w-[84.5rem] bg-lightBlueHover my-9"></div> */}

      <div>
        <div className="font-primaryFont text-end font-normal text-5xl pb-12">
          Best items
        </div>
        <div className="flex justify-around text-2xl font-light">
          {products &&
            products.map((product, index) => {
              return (
                <div>
                  <div className="w-[15rem] h-[20rem]">
                    <img src={imageBest} alt="product" />
                  </div>
                  <div className="text-darkBlueHover">{product.name}</div>
                  <div className="text-darkBlueClick">
                    {product.currency}
                    {product.price}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PTest;
