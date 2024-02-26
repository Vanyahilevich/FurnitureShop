import { FC, memo, ReactNode } from "react";
import { Link as LinkRouters } from "react-router-dom";

interface ILinkProps {
  children: ReactNode;
  to: string;
}

const Link: FC<ILinkProps> = memo(({ children, to }: ILinkProps) => {
  return (
    <LinkRouters
      to={to}
      className="text-sm  text-beigeHover transition-colors hover:text-lightBlue "
    >
      {children}
    </LinkRouters>
  );
});

export default Link;
