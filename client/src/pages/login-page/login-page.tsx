import LoginForm from "src/widgets/login-form/login-form";
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
