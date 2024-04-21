/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

interface CardReference {
  index: number; // Reference to the index of the card in main store
  isSelected: boolean;
}

interface SelectModal {
  foodCardsReference: CardReference[];
  promoCardsReference: CardReference[];
  selectedCardsReferences: { index: number }[];
  toggleCardSelectedStatus: (index: number, isPromo: boolean) => void;
  setSelectedCardReference: (index: number) => void;
  removeSelectedCardReference: (index: number) => void;
}

const useSelectModalStore = create<SelectModal>()(
  devtools(
    immer((set) => ({
      foodCardsReference: [],
      promoCardsReference: [
        { isSelected: false, index: 0 },
        { isSelected: false, index: 1 },
        { isSelected: false, index: 2 },
        { isSelected: false, index: 3 },
      ],
      selectedCardsReferences: [],
      toggleCardSelectedStatus: (index, isPromo) =>
        set((state) => {
          state[isPromo ? 'promoCardsReference' : 'foodCardsReference'][
            index
          ].isSelected =
            !state[isPromo ? 'promoCardsReference' : 'foodCardsReference'][
              index
            ].isSelected;
        }),
      setSelectedCardReference: (index) =>
        set((state) => {
          state.selectedCardsReferences.push({ index });
        }),
      removeSelectedCardReference: (index) =>
        set((state) => {
          state.selectedCardsReferences = state.selectedCardsReferences.filter(
            (reference) => reference.index !== index
          );
        }),
    }))
  )
);

export default useSelectModalStore;
