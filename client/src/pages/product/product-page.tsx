import UIButton from "../../ui-kit/ui-button";

import "swiper/css";
import "swiper/css/navigation";
import {
  useGetProductById,
  useGetSimilarProductsById,
} from "src/services/product-api";
import { useAddProductTobasket } from "src/services/basket-api";
import { useAuthAndCall } from "src/hooks/useAuthAndCall";
import useVisibility from "src/hooks/useVisibility";
import ProductLayoutPage from "./product-layout-page";
import { useParams } from "react-router-dom";
import { serverRoutes } from "src/routes";

const ProductPage = () => {
  const { id } = useParams();

  const {
    isPending: isPendingProduct,
    error: errorProduct,
    data: product,
  } = useGetProductById(id);

  const {
    isPending: isPendingSimilar,
    error: errorSimilar,
    data: similarProducts,
  } = useGetSimilarProductsById(id);

  const isFoundProduct = product && !isPendingProduct;
  const isFoundSimilar = similarProducts && !isPendingSimilar;

  const { mutate: addProductToBasket, error } = useAddProductTobasket();
  const { handleFn, modalJSX } = useAuthAndCall(() =>
    addProductToBasket({ id }),
  );
  const textError = error?.message;
  const isVisible = useVisibility(textError);

  if (errorProduct) return "An error has occurred: " + errorProduct.message;
  if (errorSimilar) return "An error has occurred: " + errorSimilar.message;
  const imageSrc = product && serverRoutes.image + product.image;

  return (
    <ProductLayoutPage
      isFoundProduct={isFoundProduct}
      isFoundSimilar={isFoundSimilar}
      imageSrc={imageSrc}
      name={isFoundProduct && product.name}
      currency={isFoundProduct && product.currency}
      price={isFoundProduct && product.price}
      description={isFoundProduct && product.description}
      isVisible={isVisible}
      textError={textError}
      similarProducts={similarProducts}
      buttonJSX={
        <UIButton size={"md"} variant="details" onClick={handleFn}>
          Add to Basket
        </UIButton>
      }
      modalJSX={modalJSX}
    />
  );
};

export default ProductPage;
