import { IoMdClose } from "react-icons/io";
import IconButton from "./icon-button";
import Tooltip from "./tooltip";

const CloseButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Tooltip title={"Close Search"}>
      <IconButton onClick={onClick}>
        <IoMdClose className="w-6 h-6 text-beigeHover transition-colors hover:text-lightBlue " />
      </IconButton>
    </Tooltip>
  );
};

export default CloseButton;
