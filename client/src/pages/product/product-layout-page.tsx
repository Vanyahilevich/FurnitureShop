import UIButton from "../../ui-kit/ui-button";
import { Link } from "react-router-dom";
import { clientRoutes, serverRoutes } from "../../routes";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import clsx from "clsx";

const ProductLayoutPage = ({
  modalJSX,
  isFoundProduct,
  isFoundSimilar,
  imageSrc,
  name,
  currency,
  price,
  description,
  isVisible,
  textError,
  buttonJSX,
  similarProducts,
}) => {
  return (
    <>
      {modalJSX}
      {isFoundProduct && (
        <div className="flex flex-col w-full gap-6">
          <div
            className="flex w-full 
          flex-col gap-2
          md:flex-row md:gap-6 
        "
          >
            <div className={clsx("w-full h-60 md:max-w-[calc(60%)] md:h-96")}>
              <img
                className="w-full h-full object-cover object-center"
                src={imageSrc}
                alt={name}
              />
            </div>
            <div className="flex w-full flex-col gap-2 align-end">
              <div className="font-primaryFont text-2xl md:text-4xl">
                {name}
              </div>
              <div className="text-lightBlueHover text-base font-semibold">
                {currency} {price}
              </div>
              <div className="flex-1 text-sm text-lightBlueHover ">
                {description}
              </div>
              <div className="self-end flex flex-col">
                <div
                  className={clsx(
                    "text-red-400  w-full text-sm transition-opacity",
                    isVisible ? "opacity-100" : "opacity-0",
                  )}
                >
                  {textError}
                </div>
                {buttonJSX}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-primaryFont text-end font-normal text-2xl md:text-3xl ">
              Best items
            </div>
            <div className="">
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  960: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
                navigation={true}
                modules={[Navigation]}
                className={clsx("w-full ")}
              >
                {isFoundSimilar &&
                  similarProducts?.map((product, index) => {
                    return (
                      <SwiperSlide
                        key={product.id}
                        virtualIndex={index}
                        className="w-full h-full"
                      >
                        <Link
                          to={clientRoutes.product + product.id}
                          className="block w-full h-full"
                        >
                          <div className="flex flex-col gap-1">
                            <div className="w-full h-60 overflow-hidden">
                              <img
                                className="w-full h-full object-cover object-center"
                                src={serverRoutes.image + product.image}
                                alt={product.image}
                              />
                            </div>
                            <div className="text-darkBlueHover">
                              {product.name}
                            </div>
                            <div className="text-darkBlueClick">
                              {product.currency}
                              {product.price}
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductLayoutPage;
