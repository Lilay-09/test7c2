import { useEffect } from "react";
import { useState } from "react";

export const CheckResponse = () => {
  const [windowSize, setWindowSize] = useState();
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
