import { lazy, Suspense } from "react";
import useViewPortWidth from "../../../hooks/useViewPortWidth.tsx";
import Fallback from "./components/Fallback.tsx";

const PcNav = lazy(() => import("./components/PcNav.tsx"));
const PhoneNav = lazy(() => import("./components/PhoneNav.tsx"));

const NavigationBar = () => {
  // Check for viewport changes
  const { vw } = useViewPortWidth();

  return (
    <Suspense fallback={<Fallback vw={vw} />}>
      {vw < 900 ? <PhoneNav /> : <PcNav />}
    </Suspense>
  );
};

export default NavigationBar;
