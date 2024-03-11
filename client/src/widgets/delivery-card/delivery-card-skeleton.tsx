import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DeliveryCardSkeleton = () => {
  return (
    <div className="flex  flex-col max-w-[calc(50%-10px)] text-sm text-slate-500 ">
      <Skeleton width={550} height={318} />
      <div className=" pt-2 pb-6 ">
        <div className="mb-1">
          <Skeleton width={350} height={20} />
        </div>
        <Skeleton width={200} height={14} />
      </div>

      <div className="flex self-end gap-5 items-end">
        <Skeleton width={173} height={39} />
        <Skeleton width={243} height={52} />
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
