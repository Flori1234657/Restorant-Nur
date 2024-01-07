import { Input, Stack } from "@mui/joy";
import { IoSearch } from "react-icons/io5";
import Filter from "./Filter";
import ClearButton from "./ClearButton";

const ActionsPanel = () => {
  return (
    <Stack>
      <Stack>
        <Filter />
        <Input startDecorator={<IoSearch />} placeholder="Search" />
      </Stack>
      <ClearButton />
    </Stack>
  );
};

export default ActionsPanel;
