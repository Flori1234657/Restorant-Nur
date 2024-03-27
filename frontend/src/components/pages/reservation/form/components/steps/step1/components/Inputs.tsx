import { Stack } from '@mui/joy';
import InputField from '../../components/InputField';
import { useFormUiStore } from '../../../../state/uiState';

function Inputs() {
  const openTableModal = useFormUiStore((state) => state.tableModal.toggleOpen);

  return (
    <Stack sx={{ gap: { xs: '0.75rem' }, width: '100%' }}>
      <InputField
        label="Full name"
        type="text"
        placeholder="Name Surname"
        errorText="This field is required!"
      />
      <Stack direction="row" width="100%" justifyContent="space-between">
        <Stack sx={{ width: { xs: '7rem', md: '6rem' } }}>
          <InputField
            label="Check in date"
            type="date"
            placeholder="dd/mm/yyyy"
            errorText="This field is required!"
          />
        </Stack>
        <Stack sx={{ width: { xs: '6.5rem', md: '5rem' } }}>
          <InputField
            label="Check in time"
            type="time"
            placeholder="hh:mm"
            errorText="This field is required!"
          />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        width={{ xs: '100%', md: '87%' }}
        justifyContent="space-between"
      >
        <Stack sx={{ width: { xs: '5rem', md: '4.5rem' } }}>
          <InputField
            label="Persons"
            type="number"
            placeholder="1"
            errorText="This field is required!"
          />
        </Stack>
        <Stack sx={{ width: { xs: '6rem', md: '5rem' } }}>
          <InputField
            label="Table"
            type="button"
            placeholder="Click to select"
            errorText="This field is required!"
            actions={() => openTableModal()}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Inputs;
