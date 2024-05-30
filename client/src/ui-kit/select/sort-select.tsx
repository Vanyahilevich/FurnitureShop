import React from "react";
import UISelect from "./ui-select";
import UIOption from "../ui-option";

const SortSelect = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <UISelect value={value || "Sort"} onChange={onChange}>
      <UIOption value="Sort Ascending">Sort Ascending</UIOption>
      <UIOption value="Sort descending">Sort descending</UIOption>
      <UIOption value="">Nothing</UIOption>
    </UISelect>
  );
};

export default SortSelect;
