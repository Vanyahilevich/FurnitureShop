import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverRoutes } from "src/routes";
import { ProductsResponse } from "src/types/ProductType";
import { objectToQueryString } from "src/utils/objectToQueryString";
import ProductsLayout from "./ProductsLayout";
import UISelect from "src/ui-kit/UISelectNew";
import UIOption from "src/ui-kit/UIOption";
import UIButton from "src/ui-kit/UIButton";
import { IoMdClose } from "react-icons/io";
import Search from "src/shared/Search";
import ChangeToHorButton from "src/shared/ChangeToHorButton";
import ChangeToGroupButton from "src/shared/ChangeToGroupButton";
import ProductCard from "src/widgets/Card/product-card";
import Pagination from "src/components/Pagination";
import axios from "axios";

const initialFilter = {
  page: 1,
  limit: 9,
  sort: "",
  category: "",
  material: "",
  search: "",
};

const ProductsPage = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState(initialFilter);

  const queryString = objectToQueryString(filter) ?? "";

  const { isPending, error, data } = useQuery({
    queryKey: ["getAllProducts", queryString],
    queryFn: (): Promise<ProductsResponse> =>
      fetch(serverRoutes.products + queryString).then((res) => res.json()),
  });

  const { mutate } = useMutation({
    mutationKey: ["basket"],
    mutationFn: async (id: string) => {
      await axios.post(`${serverRoutes.basket}/${id}`, null, {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      //   queryClient.setQueryData(["auth"], null);
      //   queryClient.refetchQueries(["auth"]);
      //   queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });

  const isFoundProduct = data && data.products.length !== 0 && !isPending;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <ProductsLayout
        filter={
          <>
            <UISelect
              value={filter.sort || "Sort"}
              onChange={(value) => {
                setFilter((prev) => ({ ...prev, sort: value, page: 1 }));
              }}
            >
              <UIOption value="Sort Ascending">Sort Ascending</UIOption>
              <UIOption value="Sort descending">Sort descending</UIOption>
              <UIOption value="">Nothing</UIOption>
            </UISelect>
            <UISelect
              value={filter.category || "Category"}
              onChange={(value) => {
                setFilter((prev) => ({ ...prev, category: value, page: 1 }));
              }}
            >
              <UIOption value="Furniture">Furniture</UIOption>
              <UIOption value="Outdoor">Outdoor</UIOption>
              <UIOption value="Home Decor">Home Decor</UIOption>
              <UIOption value="Bedding">Bedding</UIOption>
              <UIOption value="Office Supplies">Office Supplies</UIOption>
              <UIOption value="">Nothing</UIOption>
            </UISelect>
            <UISelect
              value={filter.material || "Material"}
              onChange={(value) => {
                setFilter((prev) => ({ ...prev, material: value, page: 1 }));
              }}
            >
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
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  search: search,
                  page: 1,
                }))
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
                      console.log(product.id);
                      // navigate(clientRoutes.product + product.id);
                    }}
                    addToBasket={(e) => {
                      e.stopPropagation();
                      mutate(product.id);
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

export default ProductsPage;
