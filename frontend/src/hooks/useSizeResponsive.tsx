import { useEffect, useState } from "react";
import useViewPortWidth from "./useViewPortWidth";

const useSizeResponsive = (navFooter: boolean) => {
  const [size, setSize] = useState<"xs" | "sm" | "md" | "lg">("xs");
  const { vw } = useViewPortWidth();

  useEffect(() => {
    if (vw < 900) setSize("md");
    if (vw > 899) navFooter ? setSize("xs") : setSize("sm"); //&& vw < 1536
  }, [vw]);

  return { size };
};

export default useSizeResponsive;
