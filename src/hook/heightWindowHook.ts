import { useState, useEffect } from "react";

function getWindowHeight(): number {
  const height: number = document.documentElement.offsetHeight;
  return height;
}

export default function useWindowHeight(): number {
  const [windowHeight, setWindowHeight] = useState<number>(getWindowHeight());

  useEffect(() => {
    const handleResize = () => setWindowHeight(getWindowHeight());

    window.addEventListener("resize", handleResize);
  }, []);
  return windowHeight;
}
