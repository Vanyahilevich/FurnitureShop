import React, { FC, ReactNode, useState } from "react";
import { Listbox } from "@headlessui/react";
import { SlArrowRight } from "react-icons/sl";
import clsx from "clsx";

interface ISelectProps {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}

const categories = [
  { id: 1, name: "Lamps" },
  { id: 2, name: "Small space furniture" },
  { id: 3, name: "Big furniture" },
  { id: 4, name: "Popular" },
];

const Select: FC<ISelectProps> = ({ value, onChange, children }) => {
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
      console.log(isOpen);
  }

  return (
    <div className="fixed top-16 w-72">
      <Listbox value={value} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button
            onClick={handleClick}
            className="relative w-full cursor-default bg-white py-1 text-left border-b-2 border-lightBlueHover focus:outline-none sm:text-sm"
          >
            <span className="cursor-pointer block truncate text-darkBlueHover text-lg">
              Category
            </span>
            <span
              className={clsx(
                "cursor-pointer absolute inset-y-0 right-0 flex items-center pr-2 ease-in duration-150",
                {
                  "rotate-90 translate-y-1 delay-75 ease-in duration-150":
                    isOpen,
                },
              )}
            >
              <SlArrowRight
                className="h-5 w-5 text-darkBlueHover"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute w-72 overflow-auto pt-3 bg-white shadow-lg focus:outline-none sm:text-sm">
            {categories.map((category) => {
              return (
                <Listbox.Option
                  key={category.id}
                  value={category}
                  className="text-lightBlue pl-10 py-1 cursor-pointer hover:text-darkBlueHover active:text-darkBlueHover"
                >
                  {category.name}
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
