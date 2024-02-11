import React from "react";
import Select from "../ui-kit/UISelectNew";
import Option from "../ui-kit/UIOption";
import ProductCard from "../widgets/Card/product-card";

const ProductsLayout = () => {
  const handleSelectChange = (value: string) => {
    console.log(value);
  };

  return (
    <div className="flex gap-8 w-full">
      <div className="flex flex-col w-1/4 gap-5">
        <Select label="Price" onChange={handleSelectChange}>
          <Option value="Durward Reynolds">Durward Reynolds</Option>
          <Option value="Kenton Towne">Kenton Towne</Option>
          <Option value="Therese Wunsch">Therese Wunsch</Option>
          <Option value="Katelyn Rohan">Katelyn Rohans</Option>
        </Select>
        <Select label="Category" onChange={handleSelectChange}>
          <Option value="Durward Reynolds">Durward Reynolds</Option>
          <Option value="Kenton Towne">Kenton Towne</Option>
          <Option value="Therese Wunsch">Therese Wunsch</Option>
          <Option value="Katelyn Rohan">Katelyn Rohans</Option>
        </Select>
        <Select label="Material" onChange={handleSelectChange}>
          <Option value="Durward Reynolds">Durward Reynolds</Option>
          <Option value="Kenton Towne">Kenton Towne</Option>
          <Option value="Therese Wunsch">Therese Wunsch</Option>
          <Option value="Katelyn Rohan">Katelyn Rohans</Option>
        </Select>
      </div>
      <div className="flex flex-col gap-8 w-3/4">
        <div className="flex-1">sort</div>
        <div className="flex flex-1 gap-8">
          <ProductCard
            title="Black lamp"
            currency="$"
            price={478}
            src={"/light.jpg"}
          />
          <ProductCard
            title="Black lamp"
            currency="$"
            price={478}
            src={"/light.jpg"}
          />
          <ProductCard
            title="Black lamp"
            currency="$"
            price={478}
            src={"/light.jpg"}
          />
          <ProductCard
            title="Black lamp"
            currency="$"
            price={478}
            src={"/light.jpg"}
          />
        </div>
        <div className="self-end">pagination</div>
      </div>
    </div>
  );
};

export default ProductsLayout;
