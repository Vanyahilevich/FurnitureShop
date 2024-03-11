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
    <div className="flex items-center h-14 py-2 gap-10">
      <div className="w-20 h-6">{logo}</div>
      <div className="flex mr-auto items-center gap-4">{links}</div>
      <div className="flex gap-2">
        <div className="flex items-center gap-3"> {actions}</div>
        <div className="w-[1px] py-1 min-h-full bg-slate-300 overflow-hidden"></div>
        <div className="w-10 flex items-center justify-center">{auth}</div>
      </div>
    </div>
  );
};

export default HeaderLayout;
