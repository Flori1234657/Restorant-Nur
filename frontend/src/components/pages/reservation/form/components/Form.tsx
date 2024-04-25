import { Stack } from '@mui/joy';
import { FormProvider, useForm } from 'react-hook-form';
import FormButtons from './components/FormButtons';
import Fields from './steps/Fields';
import { ReservationForm } from './steps/interface/form';

function Form() {
  const form = useForm<ReservationForm>({
    defaultValues: {
      fullName: '',
      checkinDate: new Date(),
      checkinTime: '',
      persons: 0,
      table: '',
      email: '',
      phoneNumber: 0,
    },
    mode: 'all',
  });

  const { handleSubmit } = form;

  return (
    <Stack sx={{ width: { xs: '14.5rem', md: 'auto' } }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit((data: ReservationForm) => {
            if (data.email !== '') console.log(data);
          })}
        >
          <Stack sx={{ gap: { xs: '1.25rem' } }}>
            <Fields />
            <FormButtons />
          </Stack>
        </form>
      </FormProvider>
    </Stack>
  );
}

export default Form;
