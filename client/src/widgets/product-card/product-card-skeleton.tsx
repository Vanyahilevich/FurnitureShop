import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const ProductCardSkeleton = () => {
  return (
    <div
      className="
      flex flex-col 
      cursor-pointer
      min-w-full
      sm:min-w-[calc((100%/2)-6px)]
      md:min-w-[calc((100%/2)-6px)]
      lg:min-w-[calc((100%/3)-8px)]
      "
    >
      <div className="flex-grow -mt-1">
        <Skeleton height={224} />
      </div>
      <div className="w-40">
        <Skeleton height={20} />
      </div>
      <div className="w-16">
        <Skeleton height={16} />
      </div>
    </div>
  );
};

const ListProductCardSkeleton = () => {
  return (
    <>
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </>
  );
};
export default ListProductCardSkeleton;
