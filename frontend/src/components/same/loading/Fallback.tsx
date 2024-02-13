import { Stack } from "@mui/joy";
import Loading from "./Loading";

type Props = {
  height: string;
  heightMd?: string;
  heightLg?: string;
};

const Fallback = ({ height, heightMd, heightLg }: Props) => {
  return (
    <Stack
      sx={{
        height: { xs: height, md: heightMd || "auto", lg: heightLg || "auto" },
        justifyContent: "center",
      }}
    >
      <Loading w="3.125rem" />
    </Stack>
  );
};

export default Fallback;
