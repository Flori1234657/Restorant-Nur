import { FoodCardData, PromosCardData } from '@/types/cardsData';

export const fetchFoodData = async (): Promise<FoodCardData[] | string> => {
  try {
    const response = await fetch(import.meta.env.FOOD_CARDS_API_ENDPOINT);

    if (!response.ok) throw new Error('Problem when fetching data');

    return await response.json();
  } catch (error) {
    return error as string;
  }
};

export const fetchPromoData = async (): Promise<PromosCardData[] | string> => {
  try {
    const response = await fetch(import.meta.env.PROMO_CARDS_API_ENDPOINT);

    if (!response.ok) throw new Error('Problem when fetching data');

    return await response.json();
  } catch (error) {
    return error as string;
  }
};
