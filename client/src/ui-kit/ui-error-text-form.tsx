import clsx from "clsx";
import { ReactNode } from "react";

export const ErrorTextForm = ({
  error,
  children,
}: {
  error: Error | null;
  children: ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "text-sm text-red-500 h-4 mt-1",
        error ? "visible" : "invisible",
      )}
    >
      {children}
    </div>
  );
};
