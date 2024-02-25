import GroupHorisont from "../assets/icons/GroupHorisont";
import IconButton from "../shared/IconButton";
import Tooltip from "../shared/Tooltip";

const ChangeToHorButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Tooltip title={"Change List"}>
      <IconButton onClick={onClick}>
        <GroupHorisont className="w-4 h-4 text-beigeHover transition-colors hover:text-lightBlue " />
      </IconButton>
    </Tooltip>
  );
};

export default ChangeToHorButton;
