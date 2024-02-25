import { useForm, SubmitHandler } from "react-hook-form";
import UIButton from "src/ui-kit/UIButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UIFormInput from "src/ui-kit/UIFormInput";
import { serverRoutes } from "src/routes";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(3).required("Password is required"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { mutate, isSuccess, isPending, isError, error } = useMutation({
    mutationFn: (data: any) => {
      return axios.post(serverRoutes.login, data, { withCredentials: true });
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("12");
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96">
      <UIFormInput
        name={"email"}
        placeholder="Enter Email"
        register={{ ...register("email") }}
        errors={errors}
      />
      <UIFormInput
        name={"password"}
        placeholder="Enter Password"
        register={{ ...register("password") }}
        errors={errors}
        type="password"
      />
      <UIButton size="sm" variant="details" type="submit">
        Submit
      </UIButton>
    </form>
  );
};

export default LoginForm;
