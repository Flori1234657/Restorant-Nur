import useViewPortWidth from "../../../hooks/useViewPortWidth.tsx";
import { Suspense, lazy } from "react";
import "./FoodCardFallback.css";

const FoodCardPh = lazy(() => import("./cardComponents/FoodCardPh.tsx"));
const FoodCardPc = lazy(() => import("./cardComponents/FoodCardFull.tsx"));

const FoodCard = () => {
  const { vw } = useViewPortWidth();

  return (
    <Suspense fallback={<span className="food-card-fallback"></span>}>
      {vw < 1536 ? <FoodCardPh /> : <FoodCardPc promo={false} />}
    </Suspense>
  );
};

export default FoodCard;
