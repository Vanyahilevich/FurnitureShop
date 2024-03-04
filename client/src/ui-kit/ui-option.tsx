import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { FC, ReactNode } from "react";

interface IOptionProps {
  value?: string;
  children?: ReactNode;
}

const UIOption: FC<IOptionProps> = ({ value, children }) => {
  return (
    <Listbox.Option value={value}>
      <div
        className={clsx(
          "text-lightBlue pl-4 py-1 cursor-pointer",
          "hover:text-darkBlueHover",
          " active:text-darkBlueHover",
        )}
      >
        {children}
      </div>
    </Listbox.Option>
  );
};

export default UIOption;
