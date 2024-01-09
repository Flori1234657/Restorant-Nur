import { Stack, Typography } from "@mui/joy";
import InputField from "../InputField";
import SelectDishes from "./components/SelectDishes";
import Checkout from "./components/Checkout";

const StepTwo = () => {
  return (
    <Stack>
      <Typography level="body-lg">STEP 2/2</Typography>
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
      <Checkout />
    </Stack>
  );
};

export default StepTwo;
