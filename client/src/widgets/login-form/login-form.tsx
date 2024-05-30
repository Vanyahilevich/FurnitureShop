import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UIFormInput from "src/ui-kit/ui-form-input";
import { schema } from "./validate-login-schema";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ErrorTextForm } from "src/ui-kit/ui-error-text-form";
import UISubmitButton from "src/ui-kit/ui-submit-button";
import { useLogin } from "src/services/auth-api";

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
    formState: { errors: formError },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { mutate: login, isSuccess, isPending, error } = useLogin();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    login(data);
  };
  useEffect(() => {
    if (isSuccess) {
      navigate(-1);
    }
  }, [isSuccess]);
  console.log(error, formError);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      <UIFormInput
        defaultValue={"vanyahilevich@gmail.com"}
        name={"email"}
        placeholder="Enter Email"
        register={{ ...register("email") }}
        errors={formError || error?.message}
      />
      <UIFormInput
        defaultValue={"123"}
        name={"password"}
        placeholder="Enter Password"
        register={{ ...register("password") }}
        errors={formError || error}
        type="password"
      />
      <UISubmitButton
        size="sm"
        variant="details"
        type="submit"
        isLoading={isPending}
      >
        Submit
      </UISubmitButton>
      <ErrorTextForm error={error}>{error?.message}</ErrorTextForm>
    </form>
  );
};

export default LoginForm;
