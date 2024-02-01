import useViewPortWidth from "../../../hooks/useViewPortWidth";
import Fallback from "./cardComponents/Fallback";
import { Suspense, lazy } from "react";

const FoodCardPh = lazy(() => import("./cardComponents/FoodCardPh"));
const FoodCardPc = lazy(() => import("./cardComponents/FoodCardFull"));

const FoodCard = () => {
  const { vw } = useViewPortWidth();

  return (
    <Suspense fallback={<Fallback />}>
      {vw < 1200 ? <FoodCardPh /> : <FoodCardPc promo={false} />}
    </Suspense>
  );
};

export default FoodCard;
