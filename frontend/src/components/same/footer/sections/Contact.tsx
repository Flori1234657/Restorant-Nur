import { Link, Stack, Typography } from "@mui/joy";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  footerHeading,
  footerTextInfo,
  startDecStyles,
} from "./sxObjs/textInfo";

const Contact = () => {
  return (
    <Stack gap="0.25rem">
      <Typography level="h2" sx={(theme) => footerHeading(theme)}>
        Contact
      </Typography>
      <Stack gap="0.25rem">
        <Link
          href="#"
          startDecorator={<FaPhone />}
          sx={(theme) => footerTextInfo(theme)}
          slotProps={startDecStyles}
        >
          +355 68 839 3968
        </Link>
        <Link
          href="#"
          startDecorator={<FaPhone />}
          sx={(theme) => footerTextInfo(theme)}
          slotProps={startDecStyles}
        >
          +355 68 596 3254
        </Link>
        <Link
          href="#"
          startDecorator={<MdEmail />}
          sx={(theme) => footerTextInfo(theme)}
          slotProps={startDecStyles}
        >
          restorantnur@gmail.info
        </Link>
      </Stack>
    </Stack>
  );
};

export default Contact;
