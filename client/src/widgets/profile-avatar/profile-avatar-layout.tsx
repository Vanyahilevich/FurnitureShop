import { Menu } from "@headlessui/react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const ProfileAvatarLayout = ({ avatar, header, items }) => {
  return (
    <div className={"relative flex items-center"}>
      <Menu>
        <Menu.Button>{avatar}</Menu.Button>
        <Menu.Items>
          <div
            className="flex flex-col absolute right-0 z-10 mt-8 
            w-68 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg"
          >
            {header}
            <div className="p-1">
              {items.map((item) => {
                return (
                  <Menu.Item disabled={item.disabled} key={item.title}>
                    <Link
                      onClick={item.onClick}
                      to={item.link}
                      className={clsx(
                        item.disabled && "opacity-75 cursor-not-allowed",
                        "flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100",
                      )}
                    >
                      {item.iconJSX}
                      {item.title}
                    </Link>
                  </Menu.Item>
                );
              })}
            </div>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default ProfileAvatarLayout;
