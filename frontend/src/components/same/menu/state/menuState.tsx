/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface MenuStore {
  menuFoodCategories: { name: string; imagePath: string; isActive: boolean }[];
  isAtSelectMode: boolean;
  setActive: (index: number) => void;
  toggleSelectMode: (isTrue: boolean) => void;
}

const useMenuStore = create<MenuStore>()(
  immer((set) => ({
    isAtSelectMode: false,
    menuFoodCategories: [
      {
        name: 'Fish',
        isActive: true,
        imagePath: 'path/to/image',
      },
      {
        name: 'Pasta',
        isActive: false,
        imagePath: 'path/to/image',
      },
      {
        name: 'Risotto',
        isActive: false,
        imagePath: 'path/to/image',
      },
      {
        name: 'Soups',
        isActive: false,
        imagePath: 'path/to/image',
      },
      {
        name: 'Salads',
        isActive: false,
        imagePath: 'path/to/image',
      },
      {
        name: 'Drinks',
        isActive: false,
        imagePath: 'path/to/image',
      },
      {
        name: 'Others',
        isActive: false,
        imagePath: 'path/to/image',
      },
    ],
    setActive: (index) =>
      set((state) => {
        state.menuFoodCategories.forEach((category) => {
          category.isActive = false;
        });

        state.menuFoodCategories[index].isActive = true;
      }),
    toggleSelectMode: (isTrue) =>
      set((state) => {
        state.isAtSelectMode = isTrue;
      }),
  }))
);

export default useMenuStore;
