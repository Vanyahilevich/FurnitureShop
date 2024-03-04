import { Link } from "react-router-dom";
import { clientRoutes } from "src/routes";
import LoginForm from "src/widgets/LoginForm/login-form";
import LoginLayoutPage from "./login-layout-page";
import LoginSubTitle from "./login-subtitle";

const LoginPage = () => {
  return (
    <LoginLayoutPage title={"Login"}>
      <LoginForm />
      <LoginSubTitle />
    </LoginLayoutPage>
  );
};

export default LoginPage;
