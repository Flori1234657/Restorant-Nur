import { Stack, Typography } from "@mui/joy";
import Form from "./Form.tsx";
import { footerHeading, footerTextInfo } from "../sxObjs/textInfo.tsx";

const Newsletter = () => {
  return (
    <Stack gap="0.75rem" sx={{ maxWidth: { md: "8.063rem" } }}>
      <Stack>
        <Typography level="h2" sx={(theme) => footerHeading(theme)}>
          Newsletter
        </Typography>
        <Typography level="body-md" sx={(theme) => footerTextInfo(theme)}>
          Get by email the latest from our restaurant!
        </Typography>
      </Stack>
      <Form />
    </Stack>
  );
};

export default Newsletter;
