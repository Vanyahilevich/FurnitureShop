import { useAuth, useChangeInfoUser } from "src/services/auth";
import UIFileInput from "src/ui-kit/ui-file-input";
import UISubmitButton from "src/ui-kit/ui-submit-button";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import UIProfileInput from "src/ui-kit/ui-profile-input/ui-profile-input";
import { useEffect } from "react";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
};
const schema = yup.object({
  name: yup.string().max(10),
  surname: yup.string(),
  email: yup
    .string()
    .email("Enter correct email")
    .required("Email is required"),
  //     password: yup
  //       .string()
  //       .min(3, "Password must be at least 3 characters")
  //       .required("Password is required"),
  //     confirmPassword: yup
  //       .string()
  //       .oneOf([yup.ref("password"), null], "Password must match")
  //       .required("Password is required"),
  //   image: yup
  //     .mixed()
  //     .test("fileSize", "File size is too large", (value) => {
  //       return value && value[0] && value[0].size <= 1024 * 1024; // 1 MB
  //     })
  //     .test("fileType", "Unsupported file type", (value) => {
  //       return (
  //         value && value[0] && ["image/jpeg", "image/png"].includes(value[0].type)
  //       );
  //     }),
});
//   .required();

const ProfileLayoutPage = () => {
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
    setValue("surname", auth?.surname ?? "");
    setValue("email", auth?.email ?? "");

    console.log(auth?.name);
  }, [auth, setValue]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    console.log(formData);
    await changeInfoUser(formData);
  };
  return (
    <div className="flex flex-1 items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className="flex flex-col gap-2 w-96"
      >
        <UIFileInput
          name={"image"}
          register={{ ...register("image") }}
          type="file"
        />
        <UIProfileInput
          label={"Name"}
          name={"name"}
          register={{ ...register("name") }}
          errors={errors}
          setFocus={setFocus}
        />
        <UIProfileInput
          label={"Surname"}
          name={"surname"}
          register={{ ...register("surname") }}
          errors={errors}
          setFocus={setFocus}
        />
        <UIProfileInput
          label={"Email"}
          name={"Email"}
          register={{ ...register("email") }}
          errors={errors}
          setFocus={setFocus}
        />
        {/* <UISubmitButton
        size="sm"
        variant="details"
        type="submit"
        // isLoading={isPending}
      /> */}
      </form>
    </div>
  );
};

export default ProfileLayoutPage;
