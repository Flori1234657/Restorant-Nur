import { Link, Stack, Typography } from "@mui/joy";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Stack>
      <Typography level="h2">Contact</Typography>
      <Stack>
        <Link href="#" startDecorator={<FaPhone />}>
          +355 68 839 3968
        </Link>
        <Link href="#" startDecorator={<FaPhone />}>
          +355 68 596 3254
        </Link>
        <Link href="#" startDecorator={<MdEmail />}>
          restorantnur@gmail.info
        </Link>
      </Stack>
    </Stack>
  );
};

export default Contact;
