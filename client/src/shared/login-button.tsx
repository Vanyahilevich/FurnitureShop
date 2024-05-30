import { Link } from "react-router-dom";
import IconButton from "./icon-button";
import Tooltip from "./tooltip";
import { clientRoutes } from "src/routes";
import { CiLogin } from "react-icons/ci";

const LoginButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <Link to={clientRoutes.login}>
      <Tooltip title={"Login"}>
        <IconButton onClick={onClick}>
          <CiLogin className="w-7 h-7 text-beigeHover transition-colors hover:text-lightBlue " />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default LoginButton;
