import { Suspense, lazy } from 'react';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import './FoodCardFallback.css';

const FoodCardPh = lazy(() => import('./cardComponents/FoodCardPh'));
const FoodCardPc = lazy(() => import('./cardComponents/FoodCardFull'));

function FoodCard() {
  const { vw } = useViewPortWidth();

  return (
    <Suspense fallback={<span className="food-card-fallback" />}>
      {vw < 1536 ? (
        <FoodCardPh isMenuComponent={false} />
      ) : (
        <FoodCardPc promo={false} />
      )}
    </Suspense>
  );
}

export default FoodCard;
