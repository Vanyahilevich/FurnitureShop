import LoginForm from "src/widgets/login-form/login-form";
import LoginLayoutPage from "./login-layout-page";
import LoginSubTitle from "./login-subtitle";
import Alert from "src/ui-kit/alert";
import { useVisibilityAndDuration } from "src/hooks/useVisibility";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { clientRoutes } from "src/routes";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isVisibleAlert, setVisibleAlert] = useState(false);
  const handleVisibleAlert = () => setVisibleAlert(true);
  const location = useLocation();

  console.log(location.pathname);
  const [isTenporaryVisibleAlert, isDurationCompleted] =
    useVisibilityAndDuration(isVisibleAlert);
  useEffect(() => {
    if (isDurationCompleted) {
      navigate(clientRoutes.products);
    }
  }, [isDurationCompleted]);

  return (
    <LoginLayoutPage
      title={"Login"}
      alert={
        <Alert
          text={"Authentication was successful"}
          visible={isTenporaryVisibleAlert}
        />
      }
    >
      <LoginForm callback={handleVisibleAlert} />
      <LoginSubTitle />
    </LoginLayoutPage>
  );
};

export default LoginPage;
