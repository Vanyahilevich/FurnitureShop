import { Link } from "react-router-dom";
import { clientRoutes } from "src/routes";
import SignUpForm from "src/widgets/signup-form/sign-up-form";
import SignUpLayoutPage from "./signup-layout-page";
import SignUpSubTitle from "./signup-subtitle";

const SignUpPage = () => {
  return (
    <SignUpLayoutPage title={"SignUp"}>
      <SignUpForm />
      <SignUpSubTitle />
    </SignUpLayoutPage>
  );
};

export default SignUpPage;
