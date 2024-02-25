import React, { ChangeEvent, FC, useState } from "react";
import SearchLayout from "./SearchLayout";
import SearchButton from "./SearchButton";
import CloseButton from "./CloseButton";
import UIInput from "../ui-kit/UIInput";

interface ISearch {
  search: string;
  onChange: (value: string) => void;
  onResetSearch?: () => void;
}

const Search: FC<ISearch> = ({ search, onChange, onResetSearch }) => {
  return (
    <SearchLayout
      input={
        <UIInput
          value={search}
          onChangeValue={onChange}
          type="text"
          placeholder="Search.."
          autoFocus
          variant="search"
        />
      }
      search={<SearchButton />}
      close={<CloseButton onClick={onResetSearch} />}
    />
  );
};

export default Search;
