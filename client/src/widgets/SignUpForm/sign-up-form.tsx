import { useForm, SubmitHandler } from "react-hook-form";
import UIButton from "src/ui-kit/UIButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UIFormInput from "src/ui-kit/UIFormInput";
import { useMutation } from "@tanstack/react-query";
import { serverRoutes } from "src/routes";
import axios from "axios";
import { useEffect } from "react";
import clsx from "clsx";
type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup
  .object({
    name: yup.string(),
    surname: yup.string(),
    email: yup
      .string()
      .email("Enter correct email")
      .required("Email is required"),
    password: yup
      .string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("Password is required"),
  })
  .required();

const ErrorTextForm = ({ error, children }) => {
  return (
    <div
      className={clsx(
        "text-sm text-red-500 h-4 mt-1",
        error ? "visible" : "invisible",
      )}
    >
      {children}
    </div>
  );
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutate, isSuccess, isPending, isError, error } = useMutation({
    mutationFn: (data: any) => {
      return axios.post(serverRoutes.signup, data);
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate({ id: new Date(), ...data });
  };
  useEffect(() => {
    console.log("An error has occurred", error?.response.data.error);
  }, [error]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96">
      <UIFormInput
        defaultValue={"Ivan"}
        name={"name"}
        placeholder="Enter Name.."
        register={{ ...register("name") }}
        errors={errors}
      />
      <UIFormInput
        defaultValue={"Khilevich"}
        name={"surname"}
        placeholder="Enter Surname.."
        register={{ ...register("surname") }}
        errors={errors}
      />
      <UIFormInput
        defaultValue={"vanyahilevich@gmail.com"}
        name={"email"}
        placeholder="Enter Email.."
        register={{ ...register("email") }}
        errors={errors}
      />
      <UIFormInput
        defaultValue={"123"}
        name={"password"}
        placeholder="Enter Password.."
        register={{ ...register("password") }}
        errors={errors}
        type="password"
      />
      <UIFormInput
        defaultValue={"123"}
        name={"confirmPassword"}
        placeholder="Confirm Password.."
        register={{ ...register("confirmPassword") }}
        errors={errors}
        type="password"
      />
      <UIButton size="sm" variant="details" type="submit">
        Submit
      </UIButton>
      <ErrorTextForm error={error}>{error?.response.data.error}</ErrorTextForm>
    </form>
  );
};

export default SignUpForm;
