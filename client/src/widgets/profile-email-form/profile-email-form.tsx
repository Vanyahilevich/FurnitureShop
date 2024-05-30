import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth, useChangeEmailUser } from "src/services/auth-api";
import UIProfileInputLayout from "src/ui-kit/ui-profile-input/ui-profile-input-layout";
import { schema } from "./validate-email-scheme";

const ProfileEmailForm = () => {
  const { data: auth } = useAuth();

  const [isDisabled, setIsDisabled] = useState(true);

  const {
    mutate: changeEmailUser,
    error: isServerError,
    data,
  } = useChangeEmailUser();

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
    reset: resetError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("email", auth?.email ?? "");
  }, [auth, setValue]);

  useEffect(() => {
    if (isServerError?.message || errors["email"]?.message) {
      setIsDisabled(false);
      setFocus("email");
    }
  }, [isServerError?.message, errors["email"]?.message]);

  useEffect(() => {
    if (!isDisabled) {
      setFocus("email");
    }
  }, [isDisabled]);

  const onSubmit = (data) => {
    if (auth?.email === data.email) {
      return;
    }
    changeEmailUser(data);
  };

  const approveInput = () => {
    if (errors["email"]?.message) return;
    setIsDisabled(true);
  };
  const changeInput = () => {
    setIsDisabled(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <UIProfileInputLayout
        label={"Email"}
        name={"email"}
        register={register("email")}
        textError={errors["email"]?.message || isServerError?.message}
        textApprove={data?.message}
        isDisabled={isDisabled}
        changeInput={changeInput}
        approveInput={approveInput}
      />
    </form>
  );
};

export default ProfileEmailForm;
