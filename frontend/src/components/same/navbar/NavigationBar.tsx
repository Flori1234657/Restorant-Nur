import { lazy, Suspense } from "react";
import useViewPortWidth from "../../../hooks/useViewPortWidth.tsx";

const PcNav = lazy(() => import("./components/PcNav.tsx"));
const PhoneNav = lazy(() => import("./components/PhoneNav.tsx"));

const NavigationBar = () => {
  // Check for viewport changes
  const { vw } = useViewPortWidth();

  return <Suspense fallback="">{vw < 900 ? <PhoneNav /> : <PcNav />}</Suspense>;
};

export default NavigationBar;
