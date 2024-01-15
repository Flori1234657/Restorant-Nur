import { Card, CardContent, IconButton, Typography } from "@mui/joy";
import { IoIosArrowDown as Icon } from "react-icons/io";
import { closedModalTxt } from "../../sxObj/sxHoursModal";

type Props = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const HoursClosedModal = (props: Props) => {
  return (
    <Card
      sx={{
        position: "absolute",
        zIndex: "10",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        p: "0.5rem",
        bgcolor: "rgba(255, 159, 13, 0.37)",
        ml: "2rem",
        border: "none",
        borderRadius: "0.5rem",
      }}
    >
      <CardContent>
        <Typography level="body-lg" sx={(theme) => closedModalTxt(theme)}>
          Closes at
        </Typography>
        <Typography level="body-lg" sx={(theme) => closedModalTxt(theme)}>
          23 : 30
        </Typography>
      </CardContent>
      <IconButton
        aria-label="Open operating hours modal"
        sx={(theme) => ({
          height: "2rem",
          bgcolor: "rgba(255, 159, 13, 0.37)",
          color: theme.palette.primary[100],
        })}
        size="sm"
        variant="solid"
        color="primary"
        onClick={() => props.openModal(true)}
      >
        <Icon />
      </IconButton>
    </Card>
  );
};

export default HoursClosedModal;
