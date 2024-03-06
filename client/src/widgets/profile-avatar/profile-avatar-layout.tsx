import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { UserAvatar } from "./user-avatar";
import ProfileButton from "src/shared/profile-button";
import clsx from "clsx";
import { Link } from "react-router-dom";

const ProfileAvatarLayout = ({ avatar, header, items }) => {
  return (
    <div className={"relative flex items-center"}>
      <Menu>
        <Menu.Button>{avatar}</Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items>
            <div
              className="flex flex-col absolute right-0 z-10 mt-8 
            w-68 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white text-left text-sm shadow-lg"
            >
              {header}
              <div className="p-1">
                {items.map((item) => {
                  return (
                    <Menu.Item disabled={item.disabled}>
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
        </Transition>
      </Menu>
    </div>
  );
};

export default ProfileAvatarLayout;
