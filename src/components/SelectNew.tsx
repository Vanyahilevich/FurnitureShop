import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";
import { FC, ReactNode, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import Option from "../components/Option";
interface ISelectProps {
  children: ReactNode;
  onChange: (value: string) => void;
  label: string;
}

const Select: FC<ISelectProps> = ({ label, onChange, children }) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    label ? label : children[0].props.value,
  );
  console.log(selectedOption);
  return (
    <Listbox
      value={selectedOption}
      onChange={(value) => {
        setSelectedOption(value);
        onChange(value);
      }}
    >
      {({ open }) => (
        <>
          <Listbox.Button className="relative min-w-[316px] flex justify-between items-center py-1 text-left border-b-2 border-lightBlueHover sm:text-sm">
            {selectedOption}
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
            <Listbox.Options static>{children}</Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
};

export default Select;
