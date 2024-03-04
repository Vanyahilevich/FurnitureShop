import IconButton from "./icon-button";
import Tooltip from "./tooltip";
import { CiLogout } from "react-icons/ci";

const LogoutButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <Tooltip title={"Logout"}>
      <IconButton onClick={onClick}>
        <CiLogout className="w-7 h-7 text-beigeHover transition-colors hover:text-lightBlue " />
      </IconButton>
    </Tooltip>
  );
};

export default LogoutButton;
