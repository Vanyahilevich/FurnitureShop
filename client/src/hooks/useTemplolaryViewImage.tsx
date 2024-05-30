import React, { useState } from "react";

const useTemplolaryViewImage = () => {
  const [templolaryImage, setTemplolaryImage] = useState("");

  const onImageChange = (event) => {
    console.log("onImageChange");
    if (event.target.files && event.target.files[0]) {
      setTemplolaryImage(URL.createObjectURL(event.target.files[0]));
    } else {
      console.log("onImageChange", event);
      setTemplolaryImage(URL.createObjectURL(event[0]));
    }
  };
  const deleteTemplolaryImage = () => setTemplolaryImage("");
  return [templolaryImage, onImageChange, deleteTemplolaryImage];
};

export default useTemplolaryViewImage;
