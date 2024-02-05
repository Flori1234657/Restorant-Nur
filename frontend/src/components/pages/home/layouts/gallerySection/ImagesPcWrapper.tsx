import { Stack } from "@mui/joy";
import Image from "./Image";

const ImagesPcWrapper = () => {
  return (
    <Stack gap="0.25rem" direction="row" maxWidth="25.875rem">
      <Stack gap="0.25rem" width="5rem">
        <Image path="1.png" ratio="0.84" />
        <Image path="4.png" ratio="1.14" />
      </Stack>
      <Stack gap="0.25rem" width="7.5rem">
        <Image path="2.png" ratio="1.08" />
        <Image path="5.png" ratio="2.22" />
      </Stack>
      <Stack gap="0.25rem" width="9.5rem">
        <Image path="3.png" ratio="1.88" />
        <Image path="5.png" ratio="1.79" />
      </Stack>
    </Stack>
  );
};

export default ImagesPcWrapper;
