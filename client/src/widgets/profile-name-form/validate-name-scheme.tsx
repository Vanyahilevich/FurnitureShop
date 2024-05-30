import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().min(2).max(20),
});
