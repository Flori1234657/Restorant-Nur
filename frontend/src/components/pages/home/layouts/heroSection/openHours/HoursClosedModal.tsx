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
        gap: { xs: "1rem", md: "0.5rem", lg: "0.4rem" },
        p: { xs: "0.5rem", lg: "0.4rem" },
        bgcolor: "rgba(255, 159, 13, 0.37)",
        ml: { xs: "2rem", md: "8.44rem", lg: "9.35rem" },
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
        size="sm"
        sx={(theme) => ({
          height: { xs: "2rem", lg: "1.6rem" },
          width: { lg: "1.6rem" },
          bgcolor: "rgba(255, 159, 13, 0.37)",
          color: theme.palette.primary[100],
        })}
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
