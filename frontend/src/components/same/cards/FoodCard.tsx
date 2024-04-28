import { Suspense, lazy } from 'react';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import './FoodCardFallback.css';
import { PhCardProps } from './cardComponents/FoodCardPh';

const FoodCardPh = lazy(() => import('./cardComponents/FoodCardPh'));
const FoodCardPc = lazy(() => import('./cardComponents/FoodCardFull'));

interface Props {
  foodProps: PhCardProps;
  cookingTime: string;
  isAvailabe: boolean;
}

function FoodCard({ foodProps, cookingTime, isAvailabe }: Props) {
  const { vw } = useViewPortWidth();

  return (
    <Suspense fallback={<span className="food-card-fallback" />}>
      {vw < 1536 ? (
        <FoodCardPh haveShadow cardData={foodProps.cardData} />
      ) : (
        <FoodCardPc
          promo={false}
          cookingTime={cookingTime}
          cardData={foodProps.cardData}
          isAvailabe={isAvailabe}
        />
      )}
    </Suspense>
  );
}

export default FoodCard;
