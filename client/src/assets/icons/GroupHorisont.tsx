import React from "react";
import clsx from "clsx";
const GroupHorisont = ({ className }: { className?: string }) => {
  return (
    <svg
      className={clsx(className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3.33333H19C19.2652 3.33333 19.5196 3.15774 19.7071 2.84518C19.8946 2.53262 20 2.10869 20 1.66667C20 1.22464 19.8946 0.800716 19.7071 0.488156C19.5196 0.175595 19.2652 0 19 0H1C0.734784 0 0.48043 0.175595 0.292893 0.488156C0.105357 0.800716 0 1.22464 0 1.66667C0 2.10869 0.105357 2.53262 0.292893 2.84518C0.48043 3.15774 0.734784 3.33333 1 3.33333ZM19 16.6667H1C0.734784 16.6667 0.48043 16.8423 0.292893 17.1548C0.105357 17.4674 0 17.8913 0 18.3333C0 18.7754 0.105357 19.1993 0.292893 19.5118C0.48043 19.8244 0.734784 20 1 20H19C19.2652 20 19.5196 19.8244 19.7071 19.5118C19.8946 19.1993 20 18.7754 20 18.3333C20 17.8913 19.8946 17.4674 19.7071 17.1548C19.5196 16.8423 19.2652 16.6667 19 16.6667ZM19 8.33333H1C0.734784 8.33333 0.48043 8.50893 0.292893 8.82149C0.105357 9.13405 0 9.55797 0 10C0 10.442 0.105357 10.8659 0.292893 11.1785C0.48043 11.4911 0.734784 11.6667 1 11.6667H19C19.2652 11.6667 19.5196 11.4911 19.7071 11.1785C19.8946 10.8659 20 10.442 20 10C20 9.55797 19.8946 9.13405 19.7071 8.82149C19.5196 8.50893 19.2652 8.33333 19 8.33333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default GroupHorisont;
