import React, { FC } from "react";

interface IOptionProps {
  value: string | number;
  label: string;
}

const Option: FC<IOptionProps> = React.memo(
  ({ value, label, children }: IOptionProps) => {
    return (
      <option key={value} value={value}>
        <span>{children}</span>
        <span>{label}</span>
      </option>
    );
  },
);

export default Option;
