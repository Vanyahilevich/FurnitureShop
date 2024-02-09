import React, { FC, ReactNode } from "react";

interface IIconButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const IconButton: FC<IIconButtonProps> = React.memo(
  ({ children, disabled = false, onClick = () => {} }: IIconButtonProps) => {
    return (
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  },
);

export default IconButton;
