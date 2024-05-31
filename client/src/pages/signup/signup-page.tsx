import SignUpForm from "src/widgets/signup-form/sign-up-form";
import SignUpLayoutPage from "./signup-layout-page";
import SignUpSubTitle from "./signup-subtitle";
import { useEffect, useState } from "react";
import Alert from "src/ui-kit/alert";
import { useVisibilityAndDuration } from "src/hooks/useVisibility";
import { useNavigate } from "react-router-dom";
import { clientRoutes } from "src/routes";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isVisibleAlert, setVisibleAlert] = useState(false);
  const handleVisibleAlert = () => setVisibleAlert(true);

  const [isTenporaryVisibleAlert, isDurationCompleted] =
    useVisibilityAndDuration(isVisibleAlert);

  useEffect(() => {
    if (isDurationCompleted) {
      navigate(clientRoutes.login);
    }
  }, [isDurationCompleted]);

  return (
    <SignUpLayoutPage
      title={"SignUp"}
      alert={
        <Alert
          text={"Registration was successful"}
          visible={isTenporaryVisibleAlert}
        />
      }
    >
      <SignUpForm callback={handleVisibleAlert} />
      <SignUpSubTitle />
    </SignUpLayoutPage>
  );
};

export default SignUpPage;
