import { Link } from "react-router-dom";
import IconButton from "./icon-button";
import Tooltip from "./tooltip";
import { clientRoutes } from "src/routes";
import { RxPerson } from "react-icons/rx";

const ProfileButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <Link to={clientRoutes.profile}>
      <Tooltip title={"Profile"}>
        <IconButton onClick={onClick}>
          <RxPerson className="w-7 h-7 text-beigeHover transition-colors hover:text-lightBlue " />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default ProfileButton;
