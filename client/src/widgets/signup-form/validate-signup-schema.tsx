import * as yup from "yup";

export const schema = yup
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
