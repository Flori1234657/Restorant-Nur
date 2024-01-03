import { lazy, Suspense } from "react";
import useViewPortWidth from "../../../hooks/useViewPortWidth";
import Fallback from "./components/Fallback";

const PcNav = lazy(() => import("./components/PcNav"));
const PhoneNav = lazy(() => import("./components/PhoneNav"));

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
