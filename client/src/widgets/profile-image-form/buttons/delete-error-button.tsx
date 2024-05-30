import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Tooltip from "src/shared/tooltip";

const DeleteErrorButton = ({ resetError }: { resetError: () => void }) => {
  return (
    <Tooltip title="Cancel image">
      <button onClick={resetError} type="button">
        <IoIosCloseCircle className="ml-2 w-5 h-5" />
      </button>
    </Tooltip>
  );
};

export default DeleteErrorButton;
