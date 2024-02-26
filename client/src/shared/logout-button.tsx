import IconButton from "./IconButton";
import Tooltip from "./Tooltip";
import { CiLogout } from "react-icons/ci";

const LogoutButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <Tooltip title={"Logout"}>
      <IconButton onClick={onClick}>
        <CiLogout className="w-5 h-5 text-beigeHover transition-colors hover:text-lightBlue " />
      </IconButton>
    </Tooltip>
  );
};

export default LogoutButton;
