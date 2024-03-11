import IconButton from "./icon-button";
import Link from "../ui-kit/ui-link";
import { CiShoppingCart } from "react-icons/ci";
import { clientRoutes } from "src/routes";
import Badge from "./Badge";
import Tooltip from "./tooltip";

const BasketButton = ({
  onClick = () => {},
  badgeValue,
}: {
  onClick?: () => void;
  badgeValue?: number;
}) => {
  return (
    <Link to={clientRoutes.basket}>
      <Tooltip title={"Basket"}>
        <IconButton onClick={onClick}>
          <CiShoppingCart className="w-7 h-7 text-beigeHover transition-colors hover:text-lightBlue " />
          <Badge value={badgeValue} />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default BasketButton;
