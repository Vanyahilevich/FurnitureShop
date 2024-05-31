import clsx from "clsx";

const Alert = ({ text, visible }: { text: string; visible: boolean }) => {
  return (
    <div
      className={clsx(
        visible ? "translate-y-[70px]" : "-translate-y-[70px]",
        "absolute top-0 transition-all",
        "flex w-full max-w-96 bg-green-50 p-4 text-sm text-green-500 rounded-md",
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-3 h-5 w-5 flex-shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
      <div className="overflow-hidden break-words">{text}</div>
    </div>
  );
};

export default Alert;
