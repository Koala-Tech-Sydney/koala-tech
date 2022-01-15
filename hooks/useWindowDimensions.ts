import { useState, useEffect } from "react";

function getWindowDimensions() {
  // checking for Next.js's SSR because the window object doesn't exist on the server
  const hasWindow = typeof window !== "undefined";
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return [width, height];
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState([null, null]);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
