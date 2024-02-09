import React, { useState } from "react";
import clsx from "clsx";
import CloseButton from "./CloseButton";
import SearchButton from "./SearchButton";
import Input from "./Input";

const Search = ({ onClick }: { onClick?: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center gap-2">
      {open && <Input type="text" placeholder="Search.." />}
      <div className={clsx("visible transition-all", { "hidden ": open })}>
        <SearchButton onClick={() => setOpen(true)} />
      </div>
      <div className={clsx("visible transition-all", { "hidden ": !open })}>
        <CloseButton onClick={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default Search;
