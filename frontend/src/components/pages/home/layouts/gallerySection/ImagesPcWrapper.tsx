import { Stack } from "@mui/joy";
import Image from "./Image.tsx";

const ImagesPcWrapper = () => {
  return (
    <Stack
      gap="0.25rem"
      direction="row"
      sx={{ maxWidth: { md: "25.875rem", xl: "28.304rem" } }}
    >
      <Stack gap="0.25rem" sx={{ width: { md: "5rem", xl: "6.354rem" } }}>
        <Image path="1.webp" ratio="0.84" />
        <Image path="4.webp" ratio="1.14" />
      </Stack>
      <Stack gap="0.25rem" sx={{ width: { md: "7.5rem", xl: "9.5rem" } }}>
        <Image path="2.webp" ratio="1.08" />
        <Image path="5.webp" ratio="2.22" />
      </Stack>
      <Stack gap="0.25rem" sx={{ width: { md: "9.5rem", xl: "11.95rem" } }}>
        <Image path="3.webp" ratio="1.88" />
        <Image path="5.webp" ratio="1.79" />
      </Stack>
    </Stack>
  );
};

export default ImagesPcWrapper;
