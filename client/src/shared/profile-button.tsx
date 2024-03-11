import IconButton from "./icon-button";
import Tooltip from "./tooltip";
import { RxPerson } from "react-icons/rx";

const ProfileButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <Tooltip title={"Profile"}>
      <RxPerson
        onClick={onClick}
        className="w-7 h-7 text-beigeHover transition-colors hover:text-lightBlue "
      />
    </Tooltip>
  );
};

export default ProfileButton;
