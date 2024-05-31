import { ReactNode } from "react";

const SignUpLayoutPage = ({
  title,
  alert,
  children,
}: {
  title: string;
  alert: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="flex  grow items-center justify-center">
      {alert}
      <div className="flex flex-col flex-grow sm:max-w-96">
        <h1 className="text-xl mb-4 sm:text-3xl md:text-4xl md:mb-10 self-center">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default SignUpLayoutPage;
