import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BasketCardSkeleton = () => {
  return (
    <div
      className="group/basketCard  transition-all 
      relative flex flex-auto w-full gap-10 text-lg max-h-40 items-center"
    >
      <Skeleton height={160} width={240} />
      <div className="mr-auto">
        <Skeleton height={28} width={200} />
      </div>
      <div className="flex gap-9">
        <Skeleton height={28} width={96} />
        <div className="flex gap-2">
          <Skeleton height={28} width={32} />
          <Skeleton height={28} width={22} />
          <Skeleton height={28} width={32} />
        </div>
        <Skeleton height={28} width={96} />
      </div>
    </div>
  );
};

const BasketListSkeleton = () => {
  return (
    <>
      <BasketCardSkeleton />
      <BasketCardSkeleton />
      <BasketCardSkeleton />
      <BasketCardSkeleton />
    </>
  );
};
export default BasketListSkeleton;
