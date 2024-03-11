import { ReactNode } from "react";

const SignUpLayoutPage = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex  grow items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-4xl mb-10 self-center">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default SignUpLayoutPage;
