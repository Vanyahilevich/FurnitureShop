import * as yup from "yup";
export const schema = yup.object({
  image: yup
    .mixed()
    .test("fileSize", "File size is too large need file less 35kB", (value) => {
      console.log("yup", value);
      return value && value.size <= 1024 * 35;
    })
    .test("fileType", "Unsupported file type", (value) => {
      return value && ["image/jpeg", "image/png"].includes(value.type);
    }),
});
