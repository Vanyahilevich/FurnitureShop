import React, {
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";

interface ISearchLayoutProps {
  input: ReactNode;
  search: ReactNode;
  close: ReactNode;
}

const SearchLayout: FC<ISearchLayoutProps> = ({ input, search, close }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {open && React.cloneElement(input as ReactElement, {})}
      <div
        onClick={() => setOpen(true)}
        className={clsx("visible transition-all", { "hidden ": open })}
      >
        {search}
      </div>
      <div
        onClick={() => setOpen(false)}
        className={clsx("visible transition-all", { "hidden ": !open })}
      >
        {close}
      </div>
    </div>
  );
};

export default SearchLayout;
