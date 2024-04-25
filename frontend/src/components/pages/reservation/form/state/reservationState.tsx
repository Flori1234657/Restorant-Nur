/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { ReservationForm } from '../components/steps/interface/form';
import postReservation from '@/api/postReservation';

interface ReservationProps {
  reseevations: ReservationForm[];
  reservationInProcess: ReservationForm | null;
  setReservationInProcess: (data: ReservationForm | null) => void;
  addReservation: (data: ReservationForm) => Promise<void>;
}

const useReservationSotre = create<ReservationProps>()(
  devtools(
    immer((set) => ({
      reseevations: [],
      reservationInProcess: null,
      setReservationInProcess: (data) =>
        set((state) => {
          state.reservationInProcess = data;
        }),
      addReservation: async (data) =>
        set(async (state) => {
          const response = await postReservation(data);

          if (typeof response !== 'string') state.reseevations.push(response);
        }),
    }))
  )
);

export default useReservationSotre;
