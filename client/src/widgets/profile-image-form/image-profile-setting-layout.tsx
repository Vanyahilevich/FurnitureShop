import clsx from "clsx";
import { FC, ReactNode } from "react";

interface ImageProfileSettingLayoutProps {
  onSubmit: () => void;
  templolaryImageSrc: string;
  authImageSrc: string;
  actionForTemlolaryImage: ReactNode;
  actionForAuthImage: ReactNode;
  viewImage: ReactNode;
  uploadTemplate: ReactNode;
  errorText?: string;
  errorButton: ReactNode;
  register: any;
}

const ImageProfileSettingLayout: FC<ImageProfileSettingLayoutProps> = ({
  onSubmit,
  templolaryImageSrc,
  authImageSrc,
  actionForTemlolaryImage,
  actionForAuthImage,
  viewImage,
  uploadTemplate,
  errorText,
  errorButton,
  register,
}) => {
  return (
    <form onSubmit={onSubmit} {...register} encType="multipart/form-data">
      <div className="relative group/image w-full flex items-center justify-center">
        {(templolaryImageSrc || authImageSrc) && (
          <div
            className={clsx(
              "absolute w-full h-full flex items-center justify-center center",
              !errorText &&
                (authImageSrc || templolaryImageSrc) &&
                " bg-white/70 ",
              "invisible opacity-0 transition-opacity",
              "group-hover/image:visible group-hover/image:opacity-100",
            )}
          >
            {!errorText && templolaryImageSrc && (
              <div className="flex gap-5 ">{actionForTemlolaryImage}</div>
            )}
            {authImageSrc && actionForAuthImage}
          </div>
        )}
        {templolaryImageSrc || authImageSrc ? viewImage : uploadTemplate}
      </div>

      <div
        className={clsx(
          "h-6 text-center text-red-500 hover:text-red-700 mt-1 transition-colors",
          "flex justify-between",
          errorText ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        {errorText}
        {errorButton}
      </div>
    </form>
  );
};

export default ImageProfileSettingLayout;
