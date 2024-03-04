import clsx from "clsx";
import { FC, memo, ReactNode } from "react";
import { Link as LinkRouters } from "react-router-dom";

interface ILinkProps {
  children: ReactNode;
  to: string;
  className?: string;
}

const Link: FC<ILinkProps> = memo(({ children, to, className }: ILinkProps) => {
  return (
    <LinkRouters
      to={to}
      className={clsx(
        className,
        "text-md  text-beigeHover transition-colors hover:text-lightBlue ",
      )}
    >
      {children}
    </LinkRouters>
  );
});

export default Link;
