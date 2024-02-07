import React, {useState} from 'react';

const Tooltip = ({children, title}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip &&
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded whitespace-nowrap z-10">
          {title}
        </div>}
    </div>
  );
};

export default Tooltip;
