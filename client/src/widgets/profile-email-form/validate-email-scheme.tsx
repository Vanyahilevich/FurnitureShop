import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("Enter correct email")
    // .matches(/[^\d]$/, "Email cannot end with a number")
    .matches(/\.com$/, "Email must end with '.com'")
    .required("Email is required"),
});
