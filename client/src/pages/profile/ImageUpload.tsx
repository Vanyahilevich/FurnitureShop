import React, { useState } from "react";
import { useChangeInfoUser } from "src/services/auth-api";
import UIFileInput from "src/widgets/profileSettingAvatar/ui-file-input";

export const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <input type="file" onChange={onImageChange} />
      <img alt="preview image" src={image} />
    </div>
  );
};
