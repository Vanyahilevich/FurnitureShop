import React, { FC, ReactNode } from "react";

interface IAppLayoutProps {
  header: ReactNode;
  footer: ReactNode;
  aside: ReactNode;
  children: ReactNode;
}
const AppLayout: FC<IAppLayoutProps> = ({
  header,
  footer,
  aside,
  children,
}) => {
  return (
    <div className="max-w-6xl font-mainFont flex flex-col  min-h-screen mx-auto px-4">
      <header className="w-full">{header}</header>
      <aside>{aside}</aside>
      <main className="flex flex-auto pt-5">{children}</main>
      <footer className="mt-12">{footer}</footer>
    </div>
  );
};

export default AppLayout;
