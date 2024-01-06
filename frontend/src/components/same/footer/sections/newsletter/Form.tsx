import { Button, Stack } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import { MdEmail, MdCloudSync } from "react-icons/md";

const Form = () => {
  return (
    <Stack>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input startDecorator={<MdEmail />} placeholder="example@email.com" />
      </FormControl>
      <Button startDecorator={<MdCloudSync />}>Subscribe</Button>
    </Stack>
  );
};

export default Form;
