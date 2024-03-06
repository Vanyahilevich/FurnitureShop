import Tooltip from "src/shared/tooltip";

export const UserAvatar = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <Tooltip title={"Profile"}>
      <button type="button">
        <div className="relative h-10 w-10">
          <img
            className="h-full w-full rounded-full object-cover object-center ring ring-white"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Image your profile"
          />
        </div>
      </button>
    </Tooltip>
  );
};
