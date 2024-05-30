import React from "react";
import { IoMdClose } from "react-icons/io";
import UIButton from "src/ui-kit/ui-button";

const ResetFilterButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <UIButton onClick={onClick} size={"sm"} variant={"details"}>
      Reset
      <IoMdClose />
    </UIButton>
  );
};

export default ResetFilterButton;
