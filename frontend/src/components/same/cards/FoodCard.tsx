import useViewPortWidth from "../../../hooks/useViewPortWidth";
import { Suspense, lazy } from "react";

const FoodCardPh = lazy(() => import("./cardComponents/FoodCardPh"));
const FoodCardPc = lazy(() => import("./cardComponents/FoodCardFull"));

const FoodCard = () => {
  const { vw } = useViewPortWidth();

  return (
    <Suspense fallback={<span className="food-card-fallback"></span>}>
      {vw < 1536 ? <FoodCardPh /> : <FoodCardPc promo={false} />}
    </Suspense>
  );
};

export default FoodCard;
