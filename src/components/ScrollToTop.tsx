import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Detect how the navigation happened
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const navType = navEntries.length > 0 ? navEntries[0].type : "navigate";

    // Smooth scroll only for client-side link navigation
    if (navType === "navigate") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      // For reload/back/forward → instant scroll
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
