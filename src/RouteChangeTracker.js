import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default RouteChangeTracker;
