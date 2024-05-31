import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const usePreviousLocation = () => {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(location);

  useEffect(() => {
    setPreviousLocation(currentLocation);
    setCurrentLocation(location);
  }, [location, currentLocation]);

  return previousLocation;
};

export default usePreviousLocation;
