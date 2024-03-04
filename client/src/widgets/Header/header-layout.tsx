import React, { FC, ReactNode } from "react";

interface IHeaderLayoutProps {
  logo: ReactNode;
  links: ReactNode;
  actions: ReactNode;
}
const HeaderLayout: FC<IHeaderLayoutProps> = ({ logo, links, actions }) => {
  return (
    <div className="flex items-center py-2 pr-1 gap-10">
      <div className="w-20 h-6">{logo}</div>
      <div className="flex mr-auto items-center gap-4">{links}</div>
      <div className="flex items-center gap-3"> {actions}</div>
    </div>
  );
};

export default HeaderLayout;
