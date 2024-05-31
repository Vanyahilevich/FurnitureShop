import { useState, useEffect } from "react";

const useVisibility = (value?: string | boolean, duration = 3000) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDurationCompleted, setDurationCompleted] = useState(false);
  useEffect(() => {
    if (value) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setDurationCompleted(true);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [value, duration]);

  return isVisible;
};

export const useVisibilityAndDuration = (
  value?: string | boolean,
  duration = 2000,
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDurationCompleted, setDurationCompleted] = useState(false);
  useEffect(() => {
    if (value) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setDurationCompleted(true);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [value, duration]);

  return [isVisible, isDurationCompleted];
};

export default useVisibility;
