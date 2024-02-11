import React, { ChangeEvent, useState } from "react";
import SearchLayout from "./SearchLayout";
import SearchButton from "./SearchButton";
import Input from "../ui-kit/UIInput";
import CloseButton from "./CloseButton";

const Search = () => {
  const [value, setValue] = useState("");
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <SearchLayout
      input={
        <Input
          value={value}
          onChange={handleChangeInput}
          type="text"
          placeholder="Search.."
          autoFocus
        />
      }
      search={<SearchButton />}
      close={<CloseButton />}
    />
  );
};

export default Search;
