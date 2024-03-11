import React, { useState } from "react";
import { useChangeInfoUser } from "src/services/auth";
import UIFileInput from "src/ui-kit/ui-file-input";

export const ImageUpload = () => {
  const { mutate: changeInfoUser } = useChangeInfoUser();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send the image data
    const formData = new FormData();
    formData.append("image", image);

    changeInfoUser(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <UIFileInput register={{ ...register("image") }} type="file" />

      <UISubmitButton size="sm" variant="details" type="submit">
        Submit
      </UISubmitButton>
      <input type="file" onChange={handleImageChange} />
      <button type="submit">Upload Image</button>
    </form>
  );
};
