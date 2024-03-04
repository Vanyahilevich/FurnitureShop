import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import { FC, ReactNode, useState } from "react";
import { SlArrowRight } from "react-icons/sl";

interface ISelectProps {
  children: ReactNode;
  onChange: (value: string) => void;
  value: string;
  onReset?: () => void;
}

const UISelect: FC<ISelectProps> = ({ value, onChange, children }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Button className="relative w-full flex justify-between items-center py-1 text-left border-b-2 border-lightBlueHover sm:text-sm">
            {value}
            <SlArrowRight
              className={clsx("w-2 transition-transform	", {
                "rotate-90": open,
              })}
            />
          </Listbox.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options>{children}</Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};

export default UISelect;
