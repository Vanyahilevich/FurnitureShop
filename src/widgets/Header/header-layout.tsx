import React, { FC, ReactNode } from "react";

interface IHeaderLayoutProps {
  logo: ReactNode;
  links: ReactNode;
  actions: ReactNode;
}
const HeaderLayout: FC<IHeaderLayoutProps> = ({ logo, links, actions }) => {
  return (
    <div className="flex items-center min-h-8">
      <div className="w-20 h-6">{logo}</div>
      <div className="ml-20  mr-auto flex items-center gap-4">{links}</div>
      <div className="flex items-center gap-2"> {actions}</div>
    </div>
  );
};

export default HeaderLayout;
