import React from "react";
import UISelect from "./ui-select";
import UIOption from "../ui-option";

const CategorySelect = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <UISelect value={value || "Category"} onChange={onChange}>
      <UIOption value="Furniture">Furniture</UIOption>
      <UIOption value="Outdoor">Outdoor</UIOption>
      <UIOption value="Home Decor">Home Decor</UIOption>
      <UIOption value="Bedding">Bedding</UIOption>
      <UIOption value="Office Supplies">Office Supplies</UIOption>
      <UIOption value="">Nothing</UIOption>
    </UISelect>
  );
};

export default CategorySelect;
