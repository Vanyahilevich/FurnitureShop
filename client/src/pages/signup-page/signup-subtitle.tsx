import React from "react";
import Link from "src/ui-kit/ui-link";
import { clientRoutes } from "src/routes";

const SignUpSubTitle = () => {
  return (
    <div className="text-sm">
      If you have an account, you can
      <Link
        to={clientRoutes.login}
        className=" text-beigeHover  underline transition-colors hover:text-lightBlue ml-1"
      >
        login.
      </Link>
    </div>
  );
};

export default SignUpSubTitle;
