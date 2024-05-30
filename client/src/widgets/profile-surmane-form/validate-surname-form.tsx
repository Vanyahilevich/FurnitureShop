import * as yup from "yup";

export const schema = yup.object({
  surname: yup.string().min(2).max(20),
});
