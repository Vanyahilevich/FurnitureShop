import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverRoutes } from "src/routes";
import { ProductsResponse } from "src/types/ProductType";
import { objectToQueryString } from "src/utils/objectToQueryString";
import ProductsLayout from "./ProductsLayout";
import Select from "src/components/Select";
import { initialFilter } from "./products-page";

export const VTest = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState(initialFilter);

  const queryString = objectToQueryString(filter) ?? "";

  const { isPending, error, data } = useQuery({
    queryKey: ["getAllProducts", queryString],
    queryFn: (): Promise<ProductsResponse> =>
      fetch(serverRoutes.products + queryString).then((res) => res.json()),
  });

  const isFoundProduct = data && data.products.length !== 0 && !isPending;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <ProductsLayout
        filter={
          <>
            <Select
              value={filter.sort || "Sort"}
              onChange={(value) => {
                setFilter((prev) => ({ ...prev, sort: value, page: 1 }));
              }}
            >
              <Option value="Sort Ascending">Sort Ascending</Option>
              <Option value="Sort descending">Sort descending</Option>
              <Option value="">Nothing</Option>
            </Select>
            <Select
              value={filter.category || "Category"}
              onChange={(value) => {
                setFilter((prev) => ({ ...prev, category: value, page: 1 }));
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
                setFilter((prev) => ({ ...prev, material: value, page: 1 }));
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
            <Search
              search={filter.search}
              onChange={(search) =>
                setFilter((prevFilter) => ({ ...prevFilter, search: search }))
              }
              onResetSearch={() => {
                setFilter((prevFilter) => ({ ...prevFilter, search: "" }));
              }}
            />
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
            {data?.products.length === 0 && <div>Not Found Products</div>}
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
                    src={"http://localhost:5000/image/Bedroom_Wardrobe.jpg"}
                    addToFavorite={(e) => {
                      e.stopPropagation();
                      console.log("favorite");
                      // navigate(clientRoutes.product + product.id);
                    }}
                    addToBasket={(e) => {
                      e.stopPropagation();
                      // navigate(clientRoutes.product + product.id);
                    }}
                  />
                );
              })
            )}
          </>
        }
        pagination={
          isFoundProduct && (
            <Pagination
              currentPage={filter.page}
              totalPages={data.totalPages}
              onPageChange={(page) =>
                setFilter((prev) => ({ ...prev, page: page }))
              }
            />
          )
        }
      ></ProductsLayout>
    </>
  );
};
