import { Card, CardContent, IconButton, Typography } from "@mui/joy";
import { IoIosArrowDown as Icon } from "react-icons/io";

const HoursClosedModal = () => {
  return (
    <Card>
      <CardContent>
        <Typography>Closes at</Typography>
        <Typography>23 : 30</Typography>
      </CardContent>
      <IconButton>
        <Icon />
      </IconButton>
    </Card>
  );
};

export default HoursClosedModal;
