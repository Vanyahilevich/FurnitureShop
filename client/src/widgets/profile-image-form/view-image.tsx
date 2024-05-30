import clsx from "clsx";
import React from "react";

const ViewImage = ({
  templolaryImageSrc,
  authImageSrc,
}: {
  templolaryImageSrc: string;
  authImageSrc: string;
}) => {
  return (
    <div
      className={clsx(
        "flex w-64 h-64 rounded-full border-2 border-dashed  overflow-hidden",
        templolaryImageSrc ? "border-green-400" : "border-gray-400",
      )}
    >
      <img
        src={templolaryImageSrc || authImageSrc}
        className="w-full h-full object-cover "
      />
    </div>
  );
};

export default ViewImage;
