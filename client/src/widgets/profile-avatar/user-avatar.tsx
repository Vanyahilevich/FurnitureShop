import Tooltip from "src/shared/tooltip";

export const UserAvatar = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <Tooltip title={"Profile"}>
      <div className="relative h-10 w-10">
        <img
          className="h-full w-full rounded-full object-cover object-center ring ring-white"
          src={imageSrc}
          alt="Image your profile"
        />
      </div>
    </Tooltip>
  );
};
