import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const DeliveryCardSkeleton = () => {
  return (
    <div
      className="flex flex-col 
    w-full flex-auto gap-2
    sm:max-w-[calc(50%-10px)]
    md:max-w-[calc(50%-10px)]"
    >
      <div className="-mt-1 block sm:hidden">
        <Skeleton height={192} />
      </div>
      <div className="-mt-1 hidden sm:block ">
        <Skeleton height={240} />
      </div>

      <div className="flex-1 gap-1 w-full">
        <div className="flex justify-between items-center">
          <div>
            <div className="w-52 mb-1">
              <Skeleton height={20} />
            </div>
            <div className="w-40">
              <Skeleton height={14} />
            </div>
          </div>
          <div className="w-5">
            <Skeleton height={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-col self-end gap-1 items-end">
        <div className="block sm:hidden  w-32">
          <Skeleton height={28} />
        </div>
        <div className="hidden sm:block md:hidden w-32">
          <Skeleton height={32} />
        </div>
        <div className="hidden md:block w-44">
          <Skeleton height={44} />
        </div>

        <div className="block sm:hidden w-36">
          <Skeleton height={32} />
        </div>
        <div className="hidden sm:block md:hidden w-44">
          <Skeleton height={36} />
        </div>
        <div className="hidden md:block w-52">
          <Skeleton height={44} />
        </div>
      </div>
    </div>
  );
};

const DeliveryListSkeleton = () => {
  return (
    <div className="w-full flex gap-5 flex-wrap">
      <DeliveryCardSkeleton />
      <DeliveryCardSkeleton />
      <DeliveryCardSkeleton />
      <DeliveryCardSkeleton />
    </div>
  );
};

export default DeliveryListSkeleton;
