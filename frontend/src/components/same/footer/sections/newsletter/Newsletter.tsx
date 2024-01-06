import { Stack, Typography } from "@mui/joy";
import Form from "./Form";

const Newsletter = () => {
  return (
    <Stack>
      <Stack>
        <Typography level="h2">Newsletter</Typography>
        <Typography level="body-md">
          Get by email the latest from our restaurant!
        </Typography>
      </Stack>
      <Form />
    </Stack>
  );
};

export default Newsletter;
