import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import Tooltip from "./Tooltip";
import { clientRoutes } from "src/routes";
import { CiLogin } from "react-icons/ci";

const LoginButton = ({ onClick = () => {} }: { onClick?: () => void }) => {
  return (
    <Link to={clientRoutes.login}>
      <Tooltip title={"Login"}>
        <IconButton onClick={onClick}>
          <CiLogin className="w-5 h-5 text-beigeHover transition-colors hover:text-lightBlue " />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default LoginButton;
