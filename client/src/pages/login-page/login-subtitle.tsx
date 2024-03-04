import React from "react";
import Link from "src/ui-kit/ui-link";
import { clientRoutes } from "src/routes";

const LoginSubTitle = () => {
  return (
    <div className="text-sm">
      If you don't have an account, you can
      <Link
        to={clientRoutes.signup}
        className=" text-beigeHover  underline transition-colors hover:text-lightBlue ml-1"
      >
        register.
      </Link>
    </div>
  );
};

export default LoginSubTitle;
