import React from "react";
import Select from "./components/SelectNew";
import Option from "../src/components/Option";
import MyListbox from "./components/SelectNew";
const PTest = () => {
  const handleSelectChange = (value: string) => {
    console.log("Selected person:", value);
  };

  return (
    <Select label="Price" onChange={handleSelectChange}>
      <Option value="Durward Reynolds">Durward Reynolds</Option>
      <Option value="Kenton Towne">Kenton Towne</Option>
      <Option value="Therese Wunsch">Therese Wunsch</Option>
      <Option value="Katelyn Rohan">Katelyn Rohans</Option>
    </Select>
  );
};

export default PTest;
