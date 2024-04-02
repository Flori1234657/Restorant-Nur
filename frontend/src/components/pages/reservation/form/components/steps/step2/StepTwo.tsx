import { Stack } from '@mui/joy';
import InputField from '../components/InputField';
import SelectDishes from './components/SelectDishes';
import Checkout from './components/Checkout';
import StepIndicator from '../components/StepIndicator';

function StepTwo() {
  return (
    <Stack>
      <StepIndicator stepText="STEP 2/2" />
      <Stack sx={{ gap: { xs: '0.75rem' } }}>
        <InputField
          label="Email"
          type="email"
          placeholder="example@ex.domain"
          errorText="This field is required!"
        />
        <InputField
          label="Phone number"
          type="tel"
          placeholder="+355 68 839 3968"
          errorText="This field is required!"
        />
        <SelectDishes />
      </Stack>
      <Checkout />
    </Stack>
  );
}

export default StepTwo;
