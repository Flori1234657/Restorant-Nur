import Phone from "./fallbackDevices/Phone.tsx";
import Pc from "./fallbackDevices/Pc.tsx";

/**
 * InshaaAllah toggle the skeleton
 * loading animation based on
 * device viewport width
 */

const Fallback = (prop: { vw: number }) => {
  return prop.vw < 900 ? <Phone /> : <Pc />;
};

export default Fallback;
