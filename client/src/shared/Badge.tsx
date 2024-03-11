import clsx from "clsx";
import React from "react";

const Badge = ({ value }: { value?: number }) => {
  return (
    <div
      className={clsx(
        "absolute text-[10px] p-1 w-4  leading-none bottom-[-6px] right-[-4px] bg-beigeHover text-white rounded-full text-center align-middle",
        value ? "visible" : "invisible",
      )}
    >
      {value}
    </div>
  );
};

export default Badge;
