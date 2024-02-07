import React, {useState} from 'react';

const CardLayout = ({image, info, actions}) => {

  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>{image}</div>
      <div>{info}</div>
      <div
        className={`
       ${isHover ? 'opacity-100' : 'opacity-0'}
       absolute top-0 right-0
       flex gap-x-1
       bg-cyan-500 px-2 py-1
       transition-all duration-300
    `}>
        {actions}
      </div>
    </div>
  );
};

export default CardLayout;
