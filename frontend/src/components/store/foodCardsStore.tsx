/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { fetchFoodData, fetchPromoData } from '@/api/foodCards';
import { FoodCardData, PromosCardData } from '@/types/cardsData';

interface CardsStore {
  foodCards: FoodCardData[];
  promoCards: PromosCardData[];
  setFoodCards: () => Promise<void>;
  setPromoCards: () => Promise<void>;
}

const useFoodCardsStore = create<CardsStore>()(
  immer((set) => ({
    foodCards: [],
    promoCards: [],
    setFoodCards: async () =>
      set(async (state) => {
        const response = await fetchFoodData();

        if (typeof response !== 'string') state.foodCards = response;
      }),
    setPromoCards: async () =>
      set(async (state) => {
        const response = await fetchPromoData();

        if (typeof response !== 'string') state.promoCards = response;
      }),
  }))
);

export default useFoodCardsStore;
