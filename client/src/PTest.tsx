import React from "react";
import UISelect from "./ui-kit/UISelectNew";
import UIOption from "./ui-kit/UIOption";
const PTest = () => {
  const handleSelectChange = (value: string) => {
    console.log("Selected person:", value);
  };

  return (
    <UISelect label="Price" onChange={handleSelectChange}>
      <UIOption value="Durward Reynolds">Durward Reynolds</UIOption>
      <UIOption value="Kenton Towne">Kenton Towne</UIOption>
      <UIOption value="Therese Wunsch">Therese Wunsch</UIOption>
      <UIOption value="Katelyn Rohan">Katelyn Rohans</UIOption>
    </UISelect>
  );
};

export default PTest;
