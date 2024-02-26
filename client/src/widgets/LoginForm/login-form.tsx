import { useForm, SubmitHandler } from "react-hook-form";
import UIButton from "src/ui-kit/UIButton";
import { yupResolver } from "@hookform/resolvers/yup";
import UIFormInput from "src/ui-kit/UIFormInput";
import { clientRoutes, serverRoutes } from "src/routes";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { schema } from "./validate-login-form";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ErrorTextForm } from "src/ui-kit/ui-error-text-form";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate, isSuccess, isPending, isError, error } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: any) => {
      return axios.post(serverRoutes.login, data, { withCredentials: true });
    },
    onSuccess: () => {
      queryClient.refetchQueries(["auth"]);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };
  useEffect(() => {
    if (isSuccess) {
      navigate(clientRoutes.products);
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96">
      <UIFormInput
        defaultValue={"vanyahilevich@gmail.com"}
        name={"email"}
        placeholder="Enter Email"
        register={{ ...register("email") }}
        errors={errors}
      />
      <UIFormInput
        defaultValue={"123"}
        name={"password"}
        placeholder="Enter Password"
        register={{ ...register("password") }}
        errors={errors}
        type="password"
      />
      <UIButton size="sm" variant="details" type="submit" isLoading={isPending}>
        Submit
      </UIButton>
      <ErrorTextForm error={error}>{error?.response.data.error}</ErrorTextForm>
    </form>
  );
};

export default LoginForm;
