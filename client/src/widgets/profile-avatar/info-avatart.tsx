import { RxPerson } from "react-icons/rx";

export const InfoProfile = ({ name, email, surname, imageSrc }) => {
  return (
    <div className="py-3 px-4 w-72">
      <div className="flex items-center gap-3">
        <div className="relative h-10 min-w-10 flex items-center justify-center">
          {imageSrc ? (
            <img
              className="h-full w-full rounded-full object-cover object-center ring ring-white"
              src={imageSrc}
              alt="Image Profile"
            />
          ) : (
            <RxPerson className="w-7 h-7" />
          )}
        </div>
        <div className="text-sm overflow-hidden">
          <div className="font-medium text-gray-700 truncate">
            {name} {surname}
          </div>
          <div className="text-gray-400 truncate">{email} </div>
        </div>
      </div>
    </div>
  );
};
