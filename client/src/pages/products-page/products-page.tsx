import { useReducer } from "react";
import ProductsLayout from "./products-layout-page";
import ProductCard from "src/widgets/product-card/product-card";
import Pagination from "src/widgets/pagination/Pagination";
import ListProductCardSkeleton from "src/widgets/product-card/product-card-skeleton";
import { useGetAllProducts } from "src/services/product-api";
import useIsError from "src/hooks/useIsError";
import SortSelect from "src/ui-kit/select/sort-select";
import CategorySelect from "src/ui-kit/select/category-select";
import MaterialSelect from "src/ui-kit/select/material-select";
import ResetFilterButton from "src/shared/reser-filter-button";
import { createQueryStringFromObject } from "src/utils/create-queryString-from-object";
import VerticalViewButton from "src/shared/vertical-view-button";
import HorizViewButton from "src/shared/horiz-view-button";
import { serverRoutes } from "src/routes";
import Search from "src/shared/search";

const initialFilter = {
  page: 1,
  limit: 12,
  sort: "",
  category: "",
  material: "",
  search: "",
};
const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Добавляет плавность
  });
};

const productsFilterReducer = (state, action) => {
  switch (action.type) {
    case "setPage": {
      handleScrollToTop();
      return { ...state, page: action.page };
    }
    case "setHorView":
      return { ...state, limit: 4, page: 1 };
    case "setVerView":
      return { ...state, limit: 12, page: 1 };
    case "resetSearch":
      return { ...state, search: "" };
    case "setSearch":
      return { ...state, search: action.search, page: 1 };
    case "setMaterial":
      return { ...state, material: action.material, page: 1 };
    case "setCategory":
      return { ...state, category: action.category, page: 1 };
    case "setSort":
      return { ...state, sort: action.sort, page: 1 };
    case "resetFilter":
      return initialFilter;
    default:
      return state;
  }
};
const ProductsPage = () => {
  const [filter, dispatch] = useReducer(productsFilterReducer, initialFilter);
  const queryString = createQueryStringFromObject(filter) ?? "";

  const { data, isLoading, error, isSuccess, isError, isPlaceholderData } =
    useGetAllProducts(queryString);
  console.log(isPlaceholderData);
  if (isError) {
    return useIsError(error);
  }
  const hasNotProducts = isSuccess && data.products.length === 0;
  return (
    <>
      <ProductsLayout
        hasNotProducts={hasNotProducts}
        isPlaceholderData={isPlaceholderData}
        filter={
          <>
            <SortSelect
              value={filter.sort}
              onChange={(sort) => dispatch({ type: "setSort", sort })}
            />
            <CategorySelect
              value={filter.category}
              onChange={(category) =>
                dispatch({ type: "setCategory", category })
              }
            />
            <MaterialSelect
              value={filter.material}
              onChange={(material) =>
                dispatch({ type: "setMaterial", material })
              }
            />
          </>
        }
        resetButton={
          <ResetFilterButton
            onClick={() => dispatch({ type: "resetFilter" })}
          />
        }
        display={
          <>
            <Search
              search={filter.search}
              onChange={(search) => dispatch({ type: "setSearch", search })}
              onResetSearch={() => dispatch({ type: "resetSearch" })}
            />
            <HorizViewButton onClick={() => dispatch({ type: "setVerView" })} />
            <VerticalViewButton
              onClick={() => dispatch({ type: "setHorView" })}
            />
          </>
        }
        products={
          <>
            {isLoading ? (
              <ListProductCardSkeleton />
            ) : (
              isSuccess &&
              data.products.map((product) => {
                return (
                  <ProductCard
                    id={product.id}
                    key={product.id}
                    title={product.name}
                    currency={product.currency}
                    price={product.price}
                    quantity={product.quantity}
                    highlightSearchText={filter.search}
                    src={product.image && serverRoutes.image + product.image}
                  />
                );
              })
            )}
          </>
        }
        pagination={
          !hasNotProducts && (
            <Pagination
              currentPage={filter.page}
              totalPages={data?.totalPages}
              onPageChange={(page) => dispatch({ type: "setPage", page: page })}
            />
          )
        }
      ></ProductsLayout>
    </>
  );
};

export default ProductsPage;
