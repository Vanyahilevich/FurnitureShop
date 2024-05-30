import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Tooltip from "src/shared/tooltip";

const SubmitImageButton = () => {
  return (
    <Tooltip title={"Submit image"}>
      <button type="submit">
        <IoMdCheckmark className="w-10 h-10 text-green-700" />
      </button>
    </Tooltip>
  );
};

export default SubmitImageButton;
