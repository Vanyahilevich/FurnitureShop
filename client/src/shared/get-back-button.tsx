import { useNavigate } from "react-router-dom";
import UIButton from "src/ui-kit/ui-button";

const GetBackButton = () => {
  const navigate = useNavigate();

  return (
    <UIButton onClick={() => navigate(-1)} size={"sm"} variant={"details"}>
      Get Back
    </UIButton>
  );
};

export default GetBackButton;
