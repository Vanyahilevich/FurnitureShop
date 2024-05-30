import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./validate-name-scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth, useChangeInfoUser } from "src/services/auth-api";
import UIProfileInput from "src/ui-kit/ui-profile-input/ui-profile-input";

const ProfileNameForm = () => {
  const { mutate: changeInfoUser } = useChangeInfoUser();
  const { data: auth } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("name", auth?.name ?? "");
  }, [auth, setValue]);

  const onSubmit = (data) => {
    changeInfoUser(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <UIProfileInput
        label={"Name"}
        name={"name"}
        register={{ ...register("name") }}
        errors={errors}
        setFocus={setFocus}
      />
    </form>
  );
};

export default ProfileNameForm;
