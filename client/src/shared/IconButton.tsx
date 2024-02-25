import React, { ReactNode, MouseEvent, FC } from "react";

interface IIconButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: FC<IIconButtonProps> = React.memo(
  ({ children, disabled = false, onClick = () => {} }: IIconButtonProps) => {
    return (
      <button onClick={(e) => onClick(e)} disabled={disabled}>
        {children}
      </button>
    );
  },
);

export default IconButton;
