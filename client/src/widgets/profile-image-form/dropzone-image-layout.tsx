import clsx from "clsx";

const DropZoneImageLayout = ({
  getRootProps,
  getInputProps,
  isDragActive,
  name,
}) => {
  return (
    <div
      {...getRootProps}
      className={clsx(
        isDragActive && "bg-slate-100",
        "transition-all",
        "flex w-64 h-64 rounded-full cursor-pointer appearance-none items-center justify-center ",
        "border-2 border-dashed border-gray-200 p-6 transition-all hover:border-gray-400",
      )}
    >
      <div className="space-y-1 text-center">
        <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-500"
          >
            <path d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
        </div>
        <div className="text-gray-600">
          <p className="font-medium text-primary-500 hover:text-primary-700">
            Click to upload
          </p>{" "}
          or drag and drop
        </div>
        <p className="text-sm text-gray-500">SVG, PNG, JPG</p>
      </div>
      <input
        {...getInputProps}
        name={name}
        accept="image/*"
        type="file"
        className="sr-only"
      />
    </div>
  );
};
export default DropZoneImageLayout;
