import { CiSearch } from "react-icons/ci";
import IconButton from "./icon-button";
import Tooltip from "./tooltip";

const SearchButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Tooltip title={"Search Product"}>
      <IconButton onClick={onClick}>
        <CiSearch className="w-6 h-6 text-beigeHover transition-colors hover:text-lightBlue " />
      </IconButton>
    </Tooltip>
  );
};

export default SearchButton;
