import { Stack } from "@mui/joy";
import ItemMap from "./phoneItems/ItemMap";

const PhoneNav = () => {
  return (
    <nav
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: "1100",
      }}
    >
      <Stack
        sx={(theme) => ({
          bgcolor: theme.palette.primary[500],
          borderTopRightRadius: "1.25rem",
          borderTopLeftRadius: "1.25rem",
          position: "relative",
          maxHeight: "3.5625rem",
          overflow: "visible",
          alignItems: "center",
        })}
        px="2rem"
        justifyContent="space-between"
        direction="row"
      >
        <ItemMap />
      </Stack>
    </nav>
  );
};

export default PhoneNav;
