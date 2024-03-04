import clsx from "clsx";
import { ReactNode } from "react";
import useVisibility from "src/hooks/useVisibility";

export const ErrorTextForm = ({
  error,
  children,
}: {
  error: Error | null;
  children: ReactNode;
}) => {
  const isVisible = useVisibility(error);
  return (
    <div
      className={clsx(
        "text-sm text-red-500 h-4 mt-1",
        isVisible ? "visible" : "invisible",
      )}
    >
      {children}
    </div>
  );
};
