import useViewPortWidth from "../../../hooks/useViewPortWidth";
import Fallback from "./cardComponents/Fallback";
import { Suspense, lazy } from "react";

const FoodCardPh = lazy(() => import("./cardComponents/FoodCardPh"));
const FoodCardPc = lazy(() => import("./cardComponents/FoodCardPc"));

const FoodCard = () => {
  const { vw } = useViewPortWidth();

  return (
    <Suspense fallback={<Fallback />}>
      {vw < 900 ? <FoodCardPh /> : <FoodCardPc />}
    </Suspense>
  );
};

export default FoodCard;
