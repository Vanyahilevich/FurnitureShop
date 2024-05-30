import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth, useChangeInfoUser } from "src/services/auth-api";
import UIProfileInput from "src/ui-kit/ui-profile-input/ui-profile-input";
import { schema } from "./validate-surname-form";

const ProfileSurnameForm = () => {
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
    setValue("surname", auth?.surname ?? "");
  }, [auth, setValue]);
  const onSubmit = (data) => {
    changeInfoUser(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <UIProfileInput
        label={"Surname"}
        name={"surname"}
        register={{ ...register("surname") }}
        errors={errors}
        setFocus={setFocus}
      />
    </form>
  );
};

export default ProfileSurnameForm;
