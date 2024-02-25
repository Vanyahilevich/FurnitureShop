import { FC, ReactNode } from "react";

interface ICardLayoutProps {
  imageSrc: string;
  info: ReactNode;
  actions: ReactNode;
  onClick?: () => void;
}

const CardLayout: FC<ICardLayoutProps> = ({
  imageSrc,
  info,
  actions,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="
    group/card relative  cursor-pointer 
    md:flex-grow-0 md:flex-[calc((100%/2)-6px)] 
    lg:flex-grow-0 lg:flex-[calc((100%/3)-8px)]
    "
    >
      <div className="h-56 overflow-hidden ">
        <img
          className="w-full object-contain object-center"
          src={imageSrc}
          alt={"Light"}
        />
      </div>
      <div className=" pt-2 text-ellipsis">{info}</div>
      <div
        className="
        bg-blue-200  opacity-0 transition duration-300
        absolute top-0 right-0
        group-hover/card:opacity-100 
        flex gap-2 px-2 py-1 items-center
        "
      >
        {actions}
      </div>
    </div>
  );
};

export default CardLayout;
