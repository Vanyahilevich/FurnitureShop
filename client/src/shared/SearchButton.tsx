import { CiSearch } from "react-icons/ci";
import IconButton from "./IconButton";
import Tooltip from "./Tooltip";

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
