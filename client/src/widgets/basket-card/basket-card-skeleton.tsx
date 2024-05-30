import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// <Link
//   to={clientRoutes.product + id}

// >
//   <div className="truncate">{name}</div>
// </Link>
// <div className="relative flex self-end  md:self-auto">
//   <div className="min-w-24 text-left">
//     {currency} {price}
//   </div>
//   <div className="flex gap-2  w-16 items-center justify-center">
//     {conter}
//   </div>
//   <div className="min-w-28 text-right">{totalPrice}</div>
//   <div
//     className={clsx(
//       "text-sm absolute top-5 right-0 text-red-400 transition-all",
//       isVisible ? "visible" : "invisible",
//     )}
//   >
//     {errorText}
//   </div>
// </div>
// <div className="absolute top-0 right-0  opacity-0  transition-all group-hover/basketCard:opacity-100 ">
//   {deleteAction}
// </div>
// </div>
export const BasketCardSkeleton = () => {
  return (
    <div
      className="flex flex-col w-full
      md:flex-row md:items-center
      gap-2 md:gap-4 lg:gap-10
    "
    >
      <div className="w-full md:w-60 h-40 md:сmr-8">
        <Skeleton height={160} />
      </div>
      <div className="w-40 mr-auto">
        <Skeleton height={20} />
      </div>
      <div className="flex gap-6 self-end md:self-auto">
        <div className="w-16">
          <Skeleton height={20} />
        </div>
        <div className="flex gap-2">
          <div className="w-8">
            <Skeleton height={20} />
          </div>
          <div className="w-8">
            <Skeleton height={20} />
          </div>
          <div className="w-8">
            <Skeleton height={20} />
          </div>
        </div>
        <div className="w-16">
          <Skeleton height={20} />
        </div>
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
