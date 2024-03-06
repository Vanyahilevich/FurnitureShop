import { RxPerson } from "react-icons/rx";

export const InfoProfile = ({ name, email, surname, imageSrc }) => {
  return (
    <div className="py-3 px-4">
      <div className="flex items-center gap-3">
        <div className="relative h-10 min-w-10 flex items-center justify-center">
          {imageSrc ? (
            <img
              className="h-full w-full rounded-full object-cover object-center ring ring-white"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          ) : (
            <RxPerson className="w-7 h-7" />
          )}
        </div>
        <div className="text-sm">
          <div className="font-medium text-gray-700">
            {name} {surname}
          </div>
          <div className="text-gray-400 truncate">{email}</div>
        </div>
      </div>
    </div>
  );
};
