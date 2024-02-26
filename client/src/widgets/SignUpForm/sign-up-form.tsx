import { useForm, SubmitHandler } from "react-hook-form";
import UIButton from "src/ui-kit/UIButton";
import { yupResolver } from "@hookform/resolvers/yup";
import UIFormInput from "src/ui-kit/UIFormInput";
import { useMutation } from "@tanstack/react-query";
import { clientRoutes, serverRoutes } from "src/routes";
import axios from "axios";
import { schema } from "./validateSchema";
import { ErrorTextForm } from "../../ui-kit/ui-error-text-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { mutate, isSuccess, isPending, isError, error } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (data: any) => {
      return axios.post(serverRoutes.signup, data);
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate({ id: new Date(), ...data });
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("success");
      navigate(clientRoutes.login);
    }
  }, [isSuccess]);
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
      <UIButton size="sm" variant="details" type="submit" isLoading={isPending}>
        Submit
      </UIButton>
      <ErrorTextForm error={error}>{error?.response.data.error}</ErrorTextForm>
    </form>
  );
};

export default SignUpForm;
