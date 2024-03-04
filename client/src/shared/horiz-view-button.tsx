import GroupHorisont from "../assets/icons/GroupHorisont";
import IconButton from "./icon-button";
import Tooltip from "./tooltip";

const HorizViewButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Tooltip title={"Change List"}>
      <IconButton onClick={onClick}>
        <GroupHorisont className="w-4 h-4 text-beigeHover transition-colors hover:text-lightBlue " />
      </IconButton>
    </Tooltip>
  );
};

export default HorizViewButton;
