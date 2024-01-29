import { useEffect, useState } from "react";
import useViewPortWidth from "./useViewPortWidth";

const useSizeResponsive = () => {
  const [size, setSize] = useState<"xs" | "sm" | "md" | "lg">("xs");
  const { vw } = useViewPortWidth();

  useEffect(() => {
    if (vw < 900) setSize("md");
    if (vw > 899 && vw < 1200) setSize("sm");
  }, [vw]);

  return { size };
};

export default useSizeResponsive;
