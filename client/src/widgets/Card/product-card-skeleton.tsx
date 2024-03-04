import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductCardSkeleton = ({}) => {
  return (
    <div
      className="
      flex flex-col
      
      cursor-pointer
      sm:flex-grow-0 sm:flex-[calc((100%/2)-6px)] 
      md:flex-grow-0 md:flex-[calc((100%/2)-6px)] 
      lg:flex-grow-0 lg:flex-[calc((100%/3)-8px)]
      "
    >
      <Skeleton height={218} />
      <Skeleton height={20} width={150} />
      <Skeleton height={16} width={60} />
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
