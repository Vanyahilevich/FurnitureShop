import { CiDeliveryTruck } from "react-icons/ci";
import IconButton from "./icon-button";
import Tooltip from "./tooltip";
import { Link } from "react-router-dom";
import { clientRoutes } from "src/routes";
import Badge from "./Badge";

const DeliveryButton = ({
  onClick = () => {},
  badgeValue,
}: {
  onClick?: () => void;
  badgeValue?: number;
}) => {
  return (
    <Link to={clientRoutes.delivery}>
      <Tooltip title={"Delivery"}>
        <IconButton onClick={onClick}>
          <CiDeliveryTruck className="w-7 h-7 text-beigeHover transition-colors hover:text-lightBlue " />
          <Badge value={badgeValue} />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default DeliveryButton;
