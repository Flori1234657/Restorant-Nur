/* eslint-disable no-param-reassign */

import { create } from 'zustand';
// eslint-disable-next-line import/extensions
import { immer } from 'zustand/middleware/immer';

interface ModalProp {
  isOpen: boolean;
  toggleOpen: () => void;
}

interface TableModal extends ModalProp {
  selectedTable: string;
  setSelectedTable: (table: string) => void;
}

interface FormUi {
  step: 'step1' | 'step2';
  toggleStep: (step: 'step1' | 'step2') => void;
  tableModal: TableModal;
  reservationModals: {
    selectDishes: ModalProp;
    modalsWrapper: ModalProp;
    confirmBooking: 'AskToConfirm' | 'Successfull' | 'Failed' | 'Disabled';
    setConfirmBooking: (
      at: 'AskToConfirm' | 'Successfull' | 'Failed' | 'Disabled'
    ) => void;
  };
}

export const useFormUiStore = create<FormUi>()(
  immer((set) => ({
    step: 'step1',
    toggleStep: (step) => set(() => ({ step })),
    tableModal: {
      isOpen: false,
      selectedTable: '',
      toggleOpen: () =>
        set((state) => {
          state.tableModal.isOpen = !state.tableModal.isOpen;
        }),
      setSelectedTable: (table) =>
        set((state) => {
          state.tableModal.selectedTable = table;
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
      confirmBooking: 'Disabled',
      setConfirmBooking: (at) =>
        set((state) => {
          state.reservationModals.confirmBooking = at;
        }),
    },
  }))
);

export const ssasa = 'ss';
