import { AspectRatio, Stack } from "@mui/joy";
import CardsWrapper from "./components/CardsWrapper.tsx";

const Content = () => {
  return (
    <Stack>
      <AspectRatio>
        <img src="" alt="Food image" />
      </AspectRatio>
      <CardsWrapper />
    </Stack>
  );
};

export default Content;
