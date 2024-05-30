import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { clientRoutes } from "src/routes";
import UIButton from "src/ui-kit/ui-button";

const ProductCardModal = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();
  return (
    <Transition appear show={isOpen || false} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 bg-black/25 overflow-y-scroll" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel
              className="w-full max-w-md transform overflow-hidden rounded-2xl
                 bg-white p-6 text-left align-middle shadow-xl transition-all
                 
                 "
            >
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                You are not logged in to the site.
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  If you want to use all the features of the site, you need to
                  log in.
                </p>
              </div>

              <div className="mt-4 flex justify-end gap-5">
                <UIButton
                  onClick={closeModal}
                  className="self-end"
                  size={"sm"}
                  variant={"add"}
                >
                  Got it, thanks!
                </UIButton>
                <UIButton
                  onClick={() => navigate(clientRoutes.login)}
                  size={"sm"}
                  variant={"details"}
                >
                  Login
                </UIButton>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default ProductCardModal;
