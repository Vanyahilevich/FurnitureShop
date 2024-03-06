import clsx from "clsx";
import { FC, ReactNode, useEffect, useState } from "react";
import Link from "src/ui-kit/ui-link";
import useVisibility from "src/hooks/useVisibility";
import { clientRoutes } from "src/routes";
import HighlightSearchText from "../highlight-search-text";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ICardLayoutProps {
  id: string;
  imageSrc: string;
  title: string;
  currency: string;
  price: number;
  actions: ReactNode;
  textError?: string;
  quantity: number;
  highlightSearchText: string;
}

const CardLayout: FC<ICardLayoutProps> = ({
  id,
  imageSrc,
  title,
  currency,
  price,
  actions,
  textError,
  quantity,
  highlightSearchText,
}) => {
  const isVisible = useVisibility(textError);
  const hasProduct = quantity !== 0;
  return (
    <div
      className="
      text-ellipsis  truncate
      group/card relative  cursor-pointer
      sm:flex-grow-0 sm:flex-[calc((100%/2)-6px)] 
      md:flex-grow-0 md:flex-[calc((100%/2)-6px)] 
      lg:flex-grow-0 lg:flex-[calc((100%/3)-8px)]
      "
    >
      <Link to={clientRoutes.product + id}>
        <div className={clsx("relative h-56 overflow-hidden bg-[#ECECEC]")}>
          {!hasProduct && (
            <div
              className="group/text absolute bottom-0 top-0 left-0 right-0 transition-all
                hover:backdrop-blur-sm
              flex items-center justify-center"
            >
              <span className="group-hover/text:visible invisible text-2xl text-lightBlue font-bold">
                SOLD OUT
              </span>
            </div>
          )}
          <div
            className={clsx(
              "absolute bottom-0 px-2 py-1 text-red-400 bg-slate-300 w-full text-sm transition-opacity",
              isVisible ? "opacity-100" : "opacity-0",
            )}
          >
            {textError}
          </div>
          <LazyLoadImage
            alt={title}
            src={imageSrc}
            style={{
              minWidth: "100%",
              minHeight: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div className=" pt-2 text-ellipsis">
          <h2 className="font-light text-black text-lg truncate">
            <HighlightSearchText
              text={title}
              highlightSearchText={highlightSearchText}
            />
          </h2>
          <h2 className="text-sm font-light leading-tight text-lightBlue">
            {currency} {price}
          </h2>
        </div>
        {hasProduct && (
          <div
            className="
        bg-blue-200  opacity-0 transition duration-300
        absolute top-0 right-0
        group-hover/card:opacity-100 
        flex gap-2 px-2 py-1 items-center
        "
          >
            {actions}
          </div>
        )}
      </Link>
    </div>
  );
};

export default CardLayout;
