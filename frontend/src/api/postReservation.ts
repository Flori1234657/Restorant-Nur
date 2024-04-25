import { ReservationForm } from '@/components/pages/reservation/form/components/steps/interface/form';

const postReservation = async (
  data: ReservationForm
): Promise<string | ReservationForm> => {
  try {
    const response = await fetch('url_endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Request failed');

    const responseData: ReservationForm = await response.json();

    return responseData;
  } catch (error) {
    return error as string;
  }
};

export default postReservation;
