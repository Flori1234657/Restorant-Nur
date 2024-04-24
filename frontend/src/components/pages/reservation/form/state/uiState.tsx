/* eslint-disable no-param-reassign */

import { create } from 'zustand';
// eslint-disable-next-line import/extensions
import { immer } from 'zustand/middleware/immer';

interface ModalProp {
  isOpen: boolean;
  toggleOpen: () => void;
}

interface FormUi {
  step: 'step1' | 'step2';
  toggleStep: (step: 'step1' | 'step2') => void;
  tableModal: ModalProp;
  reservationModals: {
    selectDishes: ModalProp;
    modalsWrapper: ModalProp;
  };
}

export const useFormUiStore = create<FormUi>()(
  immer((set) => ({
    step: 'step1',
    toggleStep: (step) => set(() => ({ step })),
    tableModal: {
      isOpen: false,
      toggleOpen: () =>
        set((state) => {
          state.tableModal.isOpen = !state.tableModal.isOpen;
        }),
    },
    reservationModals: {
      selectDishes: {
        isOpen: false,
        toggleOpen: () =>
          set((state) => {
            state.reservationModals.selectDishes.isOpen =
              !state.reservationModals.selectDishes.isOpen;
          }),
      },
      modalsWrapper: {
        isOpen: false,
        toggleOpen: () =>
          set((state) => {
            state.reservationModals.modalsWrapper.isOpen =
              !state.reservationModals.modalsWrapper.isOpen;
          }),
      },
    },
  }))
);

export const ssasa = 'ss';
