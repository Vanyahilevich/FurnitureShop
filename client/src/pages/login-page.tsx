import { Link } from "react-router-dom";
import { clientRoutes } from "src/routes";
import LoginForm from "src/widgets/LoginForm/login-form";

const LoginPage = () => {
  return (
    <div className="flex grow items-center justify-center ">
      <div className="flex flex-col">
        <h1 className="text-4xl mb-10 self-center">Login</h1>
        <LoginForm />
        <div className="text-sm">
          If you don't have an account, you can
          <Link
            to={clientRoutes.signup}
            className=" text-beigeHover  underline transition-colors hover:text-lightBlue ml-1"
          >
            register.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
