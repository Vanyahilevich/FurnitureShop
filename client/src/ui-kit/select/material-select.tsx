import React from "react";
import UISelect from "./ui-select";
import UIOption from "../ui-option";

const MaterialSelect = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <UISelect value={value || "Material"} onChange={onChange}>
      <UIOption value="Fabric">Fabric</UIOption>
      <UIOption value="Wood">Wood</UIOption>
      <UIOption value="Leather">Leather</UIOption>
      <UIOption value="Metal">Metal</UIOption>
      <UIOption value="Glass">Glass</UIOption>
      <UIOption value="Rattan">Rattan</UIOption>
      <UIOption value="Velvet">Velvet</UIOption>
      <UIOption value="Cotton">Cotton</UIOption>
      <UIOption value="Marble">Marble</UIOption>
      <UIOption value="">Nothing</UIOption>
    </UISelect>
  );
};

export default MaterialSelect;
