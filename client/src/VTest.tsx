import React, { useState } from "react";
import ProductCard from "./widgets/Card/product-card";
import { resetFilter, updateFilter } from "./features/filter/filter-slice";
import { useAppDispatch } from "./store";
import ProductsLayout from "./pages/ProductsLayout";
import Select from "./ui-kit/UISelectNew";
import Option from "./ui-kit/UIOption";
import ChangeToHorButton from "./shared/ChangeToHorButton";
import ChangeToGroupButton from "./shared/ChangeToGroupButton";
import CellPagination from "./components/CellPagination";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ProductsResponse } from "types/ProductType";
import { objectToQueryString } from "./utils/objectToQueryString";
import UIButton from "./ui-kit/UIButton";
import { IoMdClose } from "react-icons/io";

const initialFilter = {
  page: 1,
  limit: 9,
  sort: "",
  category: "",
  material: "",
};

const VTest = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState(initialFilter);
  const queryString = objectToQueryString(filter);
  const { isPending, error, data } = useQuery({
    queryKey: ["getAllProducts", queryString],
    queryFn: (): Promise<ProductsResponse> =>
      fetch(`http://localhost:5000/api/products?${queryString}`).then((res) =>
        res.json(),
      ),
  });
  const pages =
    data && Array.from({ length: data.page }, (_, index) => index + 1);

  console.log(filter);

  if (error) return "An error has occurred: " + error.message;
  return (
    <ProductsLayout
      filter={
        <>
          <Select
            value={filter.sort || "Sort"}
            onChange={(value) => {
              setFilter((prev) => ({ ...prev, sort: value }));
            }}
          >
            <Option value="Sort Ascending">Sort Ascending</Option>
            <Option value="Sort descending">Sort descending</Option>
            <Option value="">Nothing</Option>
          </Select>
          <Select
            value={filter.category || "Category"}
            onChange={(value) => {
              setFilter((prev) => ({ ...prev, category: value }));
            }}
          >
            <Option value="Furniture">Furniture</Option>
            <Option value="Outdoor">Outdoor</Option>
            <Option value="Home Decor">Home Decor</Option>
            <Option value="Bedding">Bedding</Option>
            <Option value="Office Supplies">Office Supplies</Option>
            <Option value="">Nothing</Option>
          </Select>
          <Select
            value={filter.material || "Material"}
            onChange={(value) => {
              setFilter((prev) => ({ ...prev, material: value }));
            }}
          >
            <Option value="Fabric">Fabric</Option>
            <Option value="Wood">Wood</Option>
            <Option value="Leather">Leather</Option>
            <Option value="Metal">Metal</Option>
            <Option value="Glass">Glass</Option>
            <Option value="Rattan">Rattan</Option>
            <Option value="Velvet">Velvet</Option>
            <Option value="Cotton">Cotton</Option>
            <Option value="Marble">Marble</Option>
            <Option value="">Nothing</Option>
          </Select>
          <UIButton
            onClick={() => setFilter(initialFilter)}
            size={"sm"}
            variant={"details"}
            className="flex self-end items-center gap-2"
          >
            Reset
            <IoMdClose />
          </UIButton>
        </>
      }
      display={
        <>
          <ChangeToHorButton
            onClick={() =>
              setFilter((prevFilter) => ({ ...prevFilter, limit: 9 }))
            }
          />
          <ChangeToGroupButton
            onClick={() =>
              setFilter((prevFilter) => ({ ...prevFilter, limit: 4 }))
            }
          />
        </>
      }
      products={
        <>
          {isPending ? (
            <div>Loading..</div>
          ) : (
            data.products.map((product) => {
              return (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  title={product.name}
                  currency={product.currency}
                  price={product.price}
                  src={"http://localhost:5000/image/Comfortable_Sofa.jpg"}
                  addToFavorite={() => navigate(`/products/${product.id}`)}
                  addToBasket={() => navigate(`/products/${product.id}`)}
                />
              );
            })
          )}
        </>
      }
      pagination={
        <>
          {pages?.map((item) => {
            return (
              <CellPagination
                key={item}
                activePage={item === filter.page}
                onClick={() => {
                  console.log(item);
                  setFilter((prevFilter) => ({ ...prevFilter, page: item }));
                }}
              >
                {item}
              </CellPagination>
            );
          })}
        </>
      }
    ></ProductsLayout>
  );
};

export default VTest;
