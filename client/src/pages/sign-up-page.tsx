import { Link } from "react-router-dom";
import { clientRoutes } from "src/routes";
import SignUpForm from "src/widgets/SignUpForm/sign-up-form";

const SignUpPage = () => {
  return (
    <div className="flex  grow items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-4xl mb-10 self-center">SignUp</h1>
        <SignUpForm />
        <div className="text-sm">
          If you have an account, you can
          <Link
            to={clientRoutes.login}
            className=" text-beigeHover  underline transition-colors hover:text-lightBlue ml-1"
          >
            login.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
