import IconButton from "./icon-button";
import Tooltip from "./tooltip";
import { RxPerson } from "react-icons/rx";

const ProfileButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <Tooltip title={"Profile"}>
      <IconButton onClick={onClick}>
        <RxPerson className="w-7 h-7 text-beigeHover transition-colors hover:text-lightBlue " />
      </IconButton>
    </Tooltip>
  );
};

export default ProfileButton;
