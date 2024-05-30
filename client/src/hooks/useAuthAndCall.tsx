import { useState } from "react";
import { useAuth } from "src/services/auth-api";
import ProductCardModal from "src/widgets/product-card/product-card-modal";

export const useAuthAndCall = (fn) => {
  const { data: auth } = useAuth();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleFn = () => {
    console.log("click add", auth);
    if (!auth) {
      openModal();
      return;
    }
    fn();
  };
  return {
    handleFn: handleFn,
    modalJSX: <ProductCardModal isOpen={isOpen} closeModal={closeModal} />,
  };
};
