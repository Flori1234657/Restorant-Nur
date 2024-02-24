import { Stack } from '@mui/joy';
import InputField from '../InputField';

type Props = {
  openTableModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function Inputs({ openTableModal }: Props) {
  return (
    <Stack>
      <InputField
        label="Full name"
        type="text"
        placeholder="Name Surname"
        errorText="This field is required!"
      />
      <Stack>
        <InputField
          label="Check in date"
          type="date"
          placeholder="dd/mm/yyyy"
          errorText="This field is required!"
        />
        <InputField
          label="Check in time"
          type="time"
          placeholder="hh:mm"
          errorText="This field is required!"
        />
      </Stack>
      <Stack>
        <InputField
          label="Persons"
          type="number"
          placeholder="1"
          errorText="This field is required!"
        />
        <InputField
          label="Table"
          type="button"
          placeholder="Click to select"
          errorText="This field is required!"
          actions={() => openTableModal(true)}
        />
      </Stack>
    </Stack>
  );
}

export default Inputs;
