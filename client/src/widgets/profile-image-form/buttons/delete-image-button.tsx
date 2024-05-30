import React from "react";
import { FcCancel } from "react-icons/fc";
import Tooltip from "src/shared/tooltip";

const DeleteImageButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <Tooltip title={title}>
      <button onClick={onClick} type="button">
        <FcCancel className="w-10 h-10" />
      </button>
    </Tooltip>
  );
};

export default DeleteImageButton;
