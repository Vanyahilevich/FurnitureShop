import { useState, useEffect } from "react";

const useVisibility = (errorText?: string, duration = 3000) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (errorText) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [errorText, duration]);

  return isVisible;
};

export default useVisibility;
