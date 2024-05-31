import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UIFormInput from "src/ui-kit/ui-form-input";
import { schema } from "./validate-signup-schema";
import { ErrorTextForm } from "../../ui-kit/ui-error-text-form";
import UISubmitButton from "src/ui-kit/ui-submit-button";
import { useSignUp } from "src/services/auth-api";
import { useEffect } from "react";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = ({ callback }: { callback?: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { mutate: signUp, isSuccess, isPending, error } = useSignUp();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signUp(data);
  };
  useEffect(() => {
    if (isSuccess && callback) {
      callback();
    }
  }, [isSuccess]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
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
    </>
  );
};
export default SignUpForm;
