import { useNavigate } from "react-router-dom";
import { clientRoutes } from "src/routes";
import UIButton from "src/ui-kit/ui-button";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col flex-auto items-center justify-center gap-40">
        <div className="text-4xl">Sorry, something went wrong.</div>
        <div className="flex gap-10 items-center">
          <UIButton
            onClick={() => navigate(clientRoutes.home)}
            size={"lg"}
            variant={"details"}
          >
            Go to the home page
          </UIButton>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
