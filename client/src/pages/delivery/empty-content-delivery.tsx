import { clientRoutes } from "src/routes";
import GetBackButton from "src/shared/get-back-button";
import Link from "src/ui-kit/ui-link";

const EmptyContentDelivery = () => {
  return (
    <div className="flex flex-col flex-auto items-center justify-center gap-10">
      <div className="text-2xl">The delivery is still empty</div>
      <div className="flex gap-10 items-center">
        <GetBackButton />
        <Link to={clientRoutes.products}>
          Would you like to return to the products page?
        </Link>
      </div>
    </div>
  );
};

export default EmptyContentDelivery;
