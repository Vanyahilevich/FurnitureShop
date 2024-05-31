import React, { FC, ReactNode } from "react";

interface IHeaderLayoutProps {
  logo: ReactNode;
  links: ReactNode;
  actions: ReactNode;
  auth: ReactNode;
}
const HeaderLayout: FC<IHeaderLayoutProps> = ({
  logo,
  links,
  actions,
  auth,
}) => {
  return (
    <div className="py-4 flex items-center h-[72px]">
      {logo}
      <div className="flex ml-auto items-center gap-2 text-sm md:text-base">
        {links}
      </div>
      <div className="flex ml-4 gap-2">
        <div className="hidden sm:flex items-center gap-3"> {actions}</div>
        <div className="hidden sm:flex w-[1px] py-1 min-h-full bg-slate-300 overflow-hidden"></div>
        <div className="w-10 flex items-center justify-center">{auth}</div>
      </div>
    </div>
  );
};

export default HeaderLayout;
