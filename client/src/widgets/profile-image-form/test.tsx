import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ImageProfileSettingLayout from "./image-profile-setting-layout";
import { useAuth, useChangeImageUser } from "src/services/auth-api";
import { serverRoutes } from "src/routes";
import SubmitImageButton from "./buttons/submit-image-button";
import DeleteImageButton from "./buttons/delete-image-button";
import ViewImage from "./view-image";
import DeleteErrorButton from "./buttons/delete-error-button";
import DropZoneImage from "./dropzone-image";
import { schema } from "./image-validate-schema";

const MyForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset: resetError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { mutate: changeImageUser } = useChangeImageUser();
  const [templolaryImage, setTemplolaryImage] = useState("");
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image);
    changeImageUser(formData);
    setTemplolaryImage("");
  };

  const { data: auth } = useAuth();

  const authImageSrc = auth?.imageURL
    ? serverRoutes.imageAvatar + auth.imageURL
    : "";
  useEffect(() => {
    setValue("image", auth?.imageURL ?? "");
  }, [auth, setValue]);

  const handleDrop = (acceptedFiles) => {
    setValue("image", acceptedFiles[0]); // Передаем только первый принятый файл
    setTemplolaryImage(URL.createObjectURL(acceptedFiles[0]));
  };
  const deleteImageFromAuth = () => {
    changeImageUser({ image: null });
  };
  return (
    <ImageProfileSettingLayout
      register={register("image")}
      onSubmit={handleSubmit(onSubmit)}
      templolaryImageSrc={templolaryImage}
      authImageSrc={authImageSrc}
      actionForTemlolaryImage={
        <>
          <SubmitImageButton />
          <DeleteImageButton
            title={"Cancel image"}
            onClick={() => setTemplolaryImage("")}
          />
        </>
      }
      actionForAuthImage={
        <DeleteImageButton title="Delete image" onClick={deleteImageFromAuth} />
      }
      viewImage={
        <ViewImage
          templolaryImageSrc={templolaryImage}
          authImageSrc={authImageSrc}
        />
      }
      uploadTemplate={<DropZoneImage handleDrop={handleDrop} name={"image"} />}
      errorButton={
        <DeleteErrorButton
          resetError={() => {
            setTemplolaryImage("");
            resetError();
          }}
        />
      }
      errorText={errors.image?.message}
    />
  );
};
export default MyForm;
