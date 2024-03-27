import { create } from 'zustand';
// eslint-disable-next-line import/extensions
import { immer } from 'zustand/middleware/immer';

interface FormUi {
  step: 'step1' | 'step2';
  toggleStep: (step: 'step1' | 'step2') => void;
  tableModal: {
    isOpen: boolean;
    toggleOpen: () => void;
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
          // eslint-disable-next-line no-param-reassign
          state.tableModal.isOpen = !state.tableModal.isOpen;
        }),
    },
  }))
);

export const placeholder = 'sss';
