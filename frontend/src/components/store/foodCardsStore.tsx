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
    setFoodCards: async () => {
      const response = await fetchFoodData();

      if (typeof response !== 'string') {
        set((state) => {
          state.foodCards = response;
        });
      }
    },
    setPromoCards: async () => {
      const response = await fetchPromoData();

      if (typeof response !== 'string') {
        set((state) => {
          state.promoCards = response;
        });
      }
    },
  }))
);

export default useFoodCardsStore;
