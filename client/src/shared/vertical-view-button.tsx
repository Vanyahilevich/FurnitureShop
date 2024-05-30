import GroupFour from "../assets/icons/GroupFour";
import IconButton from "./icon-button";
import Tooltip from "./tooltip";

const VerticalViewButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Tooltip title={"Group list"} left={true}>
      <IconButton onClick={onClick}>
        <GroupFour className="w-4 h-4 text-beigeHover transition-colors hover:text-lightBlue " />
      </IconButton>
    </Tooltip>
  );
};

export default VerticalViewButton;
