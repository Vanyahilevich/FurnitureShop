import GroupFour from "../assets/icons/GroupFour";
import IconButton from "../shared/IconButton";
import Tooltip from "../shared/Tooltip";

const ChangeToGroupButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Tooltip title={"Group list"}>
      <IconButton onClick={onClick}>
        <GroupFour className="w-4 h-4 text-beigeHover transition-colors hover:text-lightBlue " />
      </IconButton>
    </Tooltip>
  );
};

export default ChangeToGroupButton;
